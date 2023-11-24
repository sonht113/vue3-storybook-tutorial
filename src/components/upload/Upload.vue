<template>
  <div class="flex flex-column justify-content-start align-items-start">
    <label for="image">Image</label>
    <FileUpload
      name="image"
      customUpload
      :multiple="false"
      @uploader="onUpload"
      accept="image/*"
      :maxFileSize="1000000"
      class="border-solid border-1 border-round-xs border-red"
    >
      <template #content="{ files, removeFileCallback }">
        <div v-if="files.length > 0 || image || value">
          <div class="flex justify-content-center">
            <div
              v-for="(file, index) of files"
              :key="file.name + file.type + file.size"
              class="card flex flex-column align-items-center gap-3"
            >
              <img
                role="presentation"
                :alt="file.name"
                :src="file.objectURL"
                width="100"
                class="shadow-2"
              />
              <span class="font-semibold">{{ file.name }}</span>
              <Badge value="Pending" severity="warning" />
              <Button
                icon="pi pi-times"
                @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                outlined
                rounded
                severity="danger"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <p>Drag and drop files to here to upload.</p>
        </div>
      </template>
      <template #empty v-if="image || value">
        <img
          role="presentation"
          :src="value ? getImage(value as string) : getImage(image)"
          width="100"
          class="shadow-2"
        />
      </template>
    </FileUpload>
    <small class="p-error float-left">{{ errorMessage || "&nbsp;" }}</small>
  </div>
</template>

<script lang="ts" setup>
import Badge from "primevue/badge";
import Button from "primevue/button";
import FileUpload, { FileUploadProps } from "primevue/fileupload";
import { useToast } from "primevue/usetoast";
import { upload } from "@/api/upload.api";
import { useField } from "vee-validate";
import { getImage } from "@/utils";
import { ref, toRefs } from "vue";

interface Props extends /* @vue-ignore */ FileUploadProps {
  initialValue?: string;
}

const props = defineProps<Props>();

const { initialValue } = toRefs(props);

const image = ref();

const { setValue, errorMessage, value } = useField("image");
const toast = useToast();
const formData = new FormData();

const onRemoveTemplatingFile = (
  _file: File,
  removeFileCallback: (_: number) => void,
  index: number
) => {
  removeFileCallback(index);
};

const onUpload = (event: any) => {
  if (event.files[0]) {
    formData.append("file", event.files[0]);
    upload(formData)
      .then((res) => {
        setValue(res.filename);
        image.value = res.filename;
        return toast.add({
          severity: "success",
          summary: "Success",
          detail: "File Uploaded",
          life: 3000,
        });
      })
      .catch(() => {
        toast.add({
          severity: "error",
          summary: "Error",
          detail: "File Uploade failed",
          life: 3000,
        });
      });
  }
};
</script>
