<template>
  <DefaultLayout>
    <form
      @submit="onSubmit"
      class="w-6 flex flex-column align-items-center mx-auto"
    >
      <ProductForm />

      <ButtonCustom action="none" label="Submit" type="submit" />
    </form>
  </DefaultLayout>
</template>
<script lang="ts" setup>
import { useToast } from "primevue/usetoast";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

import DefaultLayout from "@/layout/DefaultLayout.vue";
import { ProductForm } from "@/features/product";
import { ButtonCustom } from "@/components";
import { createProduct } from "@/features/product";
import router from "@/router";

interface FormValues extends yup.InferType<typeof schema> {}

const toast = useToast();

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  start_sell_date: yup.string().required(),
  image: yup.string().required(),
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit((values: FormValues) => {
  createProduct(values)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Created successfully",
        life: 3000,
      });
      return router.push("/");
    })
    .catch(() =>
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Create product failed",
        life: 3000,
      })
    );
});
</script>
