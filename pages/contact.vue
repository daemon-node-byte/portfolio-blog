<script setup lang="ts">
const sendEmail = async (e: Event) => {
  e.preventDefault();
  const formData = new FormData(document.getElementById('formEle') as HTMLFormElement);
  await $fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: parseFormDataToJson(formData)
  })
};

</script>

<template>
  <div class="mx-auto md:mt-36 max-w-[420px]">

    <h1 class="mt-[100px] font-bold font-custom text-[30px] text-center">Send me a meassage</h1>
    <form id="formEle" class="space-y-4 mx-[16px] mt-[50px] font-custom">
      <div>
        <label class="block" for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label class="block" for="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label class="block" for="phone">Phone:</label>
        <input type="text" name="phone" />
      </div>
      <div>
        <label class="block" for="message">Message:</label>
        <textarea name="message" class="bg-zinc-700 mt-1 rounded-lg w-full h-64"></textarea>
        
      </div>
      <div class="pt-6">
        <UiGenericStyledButton text="Send" TwStyles="w-full" :onClick="sendEmail" />
      </div>
      
    </form>
  </div>
</template>