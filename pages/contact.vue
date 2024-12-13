<script setup lang="ts">
const sendEmail = async (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const response = await fetch('/api/send-email', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    alert('Email sent successfully');
  } else {
    alert('Email failed to send');
  }
};

</script>

<template>
  <div class="mx-auto md:mt-36 max-w-[420px]">

    <h1 class="mt-[100px] font-bold font-custom text-[30px] text-center">Send me a meassage</h1>
    <form class="space-y-4 mx-[16px] mt-[50px] font-custom">
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
        <input type="email" name="phone" />
      </div>
      <div>
        <label class="block" for="message">Message:</label>
        <textarea name="message" class="bg-zinc-700 mt-1 rounded-lg w-full h-64"></textarea>
        
      </div>
      <div class="pt-6">
        <UiGenericStyledButton text="Send" TwStyles="w-full" />
      </div>
      
    </form>
  </div>
</template>