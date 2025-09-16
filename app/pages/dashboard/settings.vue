<script setup lang="ts">
import { reactive } from 'vue'

definePageMeta({
  layout: 'dashboard',
  title: 'Cài đặt cửa hàng'
})

const tabs = [
  { label: 'Thông tin cửa hàng', value: 'general' },
  { label: 'Thanh toán', value: 'payment' },
  { label: 'Thông báo', value: 'notification' }
]

const form = reactive({
  storeName: 'Meat Shop Quận 1',
  address: '120 Nguyễn Đình Chiểu, Quận 1, TP. HCM',
  hotline: '1900 1234',
  email: 'support@meatshop.vn'
})
</script>

<template>
  <div class="mx-auto max-w-4xl space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-1">
          <h1 class="text-xl font-semibold text-black drop-shadow-sm">Cài đặt cửa hàng</h1>
          <p class="text-sm text-neutral-600">Cập nhật thông tin chung và cấu hình hoạt động.</p>
        </div>
      </template>

      <UTabs
        :items="tabs"
        :ui="{ list: { base: 'grid grid-cols-3 gap-2 rounded-full bg-white/70 p-1 text-sm font-medium text-neutral-500' }, tab: { base: 'rounded-full px-3 py-2 data-[selected=true]:bg-brand-light/80 data-[selected=true]:text-brand-dark transition' } }"
      >
        <template #item="{ item }">
          <div v-if="item.value === 'general'" class="space-y-5 text-black">
            <UFormGroup label="Tên cửa hàng" class="text-black">
              <UInput v-model="form.storeName" class="rounded-lg border-brand-light/60 bg-white/75" />
            </UFormGroup>
            <UFormGroup label="Địa chỉ" class="text-black">
              <UTextarea v-model="form.address" :rows="3" class="rounded-lg border-brand-light/60 bg-white/75" />
            </UFormGroup>
            <div class="grid gap-4 md:grid-cols-2">
              <UFormGroup label="Hotline" class="text-black">
                <UInput v-model="form.hotline" class="rounded-lg border-brand-light/60 bg-white/75" />
              </UFormGroup>
              <UFormGroup label="Email hỗ trợ" class="text-black">
                <UInput v-model="form.email" class="rounded-lg border-brand-light/60 bg-white/75" />
              </UFormGroup>
            </div>
            <UAlert title="Ghi chú" icon="i-heroicons-information-circle" color="primary" variant="soft">
              Thông tin này sẽ được hiển thị ở trang chủ và hóa đơn giao hàng.
            </UAlert>
          </div>

          <div v-else class="rounded-lg border border-dashed border-brand-light/70 bg-white/60 p-6 text-sm text-neutral-600">
            Chức năng "{{ item.label }}" đang được xây dựng. Vui lòng quay lại sau.
          </div>
        </template>
      </UTabs>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton variant="ghost" class="rounded-full px-4">Hủy</UButton>
          <UButton color="primary" class="rounded-full px-5 shadow-emerald-100/60">Lưu thay đổi</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
