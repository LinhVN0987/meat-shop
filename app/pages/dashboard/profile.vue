<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  title: 'Hồ sơ cá nhân'
})

const profile = {
  name: 'Nguyễn Văn A',
  email: 'manager@meatshop.vn',
  phone: '0901 234 567',
  role: 'Quản lý cửa hàng'
}
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <h1 class="text-xl font-semibold text-black drop-shadow-sm">Thông tin cá nhân</h1>
      </template>

      <div class="grid gap-5 md:grid-cols-2">
        <div>
          <p class="text-sm text-neutral-500">Họ và tên</p>
          <p class="text-base font-semibold text-black">{{ profile.name }}</p>
        </div>
        <div>
          <p class="text-sm text-neutral-500">Email</p>
          <p class="text-base font-semibold text-black">{{ profile.email }}</p>
        </div>
        <div>
          <p class="text-sm text-neutral-500">Số điện thoại</p>
          <p class="text-base font-semibold text-black">{{ profile.phone }}</p>
        </div>
        <div>
          <p class="text-sm text-neutral-500">Vai trò</p>
          <p class="text-base font-semibold text-black">{{ profile.role }}</p>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <UButton color="primary" variant="soft" class="rounded-full px-5">Cập nhật thông tin</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
