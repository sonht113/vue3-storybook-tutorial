<template>
  <DefaultLayout>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <form
      @submit="onSubmit"
      class="w-6 flex flex-column align-items-center mx-auto"
      v-else
    >
      <ProductForm :initial-value="initialValue" />

      <ButtonCustom action="none" label="Submit" type="submit" />
    </form>
  </DefaultLayout>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";

import DefaultLayout from "@/layout/DefaultLayout.vue";
import { ProductForm } from "@/features/product";
import { ButtonCustom } from "@/components";
import { createProduct, getProduct, updateProduct } from "@/features/product";
import { useRoute } from "vue-router";
interface FormValues extends yup.InferType<typeof schema> {}

const toast = useToast();
const route = useRoute();

const loading = ref(false);
const initialValue = ref({});

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  start_sell_date: yup.string().required(),
  image: yup.string().required(),
});

const { handleSubmit, setValues } = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = handleSubmit((values: FormValues) => {
  console.log(values);
  updateProduct(route.params.id! as string, values)
    .then(() =>
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Updated successfully",
        life: 3000,
      })
    )
    .catch(() =>
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Update product failed",
        life: 3000,
      })
    );
});

onMounted(() => {
  loading.value = true;
  getProduct(route.params.id! as string)
    .then((res) => {
      initialValue.value = res;
      setValues({
        name: res.name,
        price: res.price,
        description: res.description,
        start_sell_date: res.start_sell_date,
        image: res.image,
      });
      loading.value = false;
    })
    .catch((err) => console.log(err));
});
</script>
