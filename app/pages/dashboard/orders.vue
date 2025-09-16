<script setup lang="ts">
import { reactive } from 'vue'

const filters = reactive({
  status: 'all',
  search: ''
})

const orders = [
  { code: 'DH-2301', customer: 'Trần Thị B', total: '₫1.280.000', status: 'pending', createdAt: '09:42 • Hôm nay' },
  { code: 'DH-2299', customer: 'Cửa hàng Organic ABC', total: '₫7.420.000', status: 'shipping', createdAt: '07:28 • Hôm nay' },
  { code: 'DH-2298', customer: 'Công ty Ẩm thực ABC', total: '₫5.640.000', status: 'shipping', createdAt: '20:15 • Hôm qua' },
  { code: 'DH-2294', customer: 'Nguyễn Văn C', total: '₫2.420.000', status: 'completed', createdAt: '16:02 • Hôm qua' }
]

definePageMeta({
  layout: 'dashboard',
  title: 'Đơn hàng'
})

const statusOptions = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Chờ xử lý', value: 'pending' },
  { label: 'Đang giao', value: 'shipping' },
  { label: 'Hoàn tất', value: 'completed' }
]

const columns = [
  { id: 'code', key: 'code', label: 'Mã đơn' },
  { id: 'customer', key: 'customer', label: 'Khách hàng' },
  { id: 'total', key: 'total', label: 'Tổng tiền' },
  { id: 'status', key: 'status', label: 'Trạng thái' },
  { id: 'createdAt', key: 'createdAt', label: 'Thời gian tạo' }
]

const statusColor = {
  pending: 'orange',
  shipping: 'blue',
  completed: 'green'
} as const
</script>

<template>
  <div class="space-y-6">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-xl font-semibold text-black drop-shadow-sm">Đơn hàng</h1>
            <p class="text-sm text-neutral-500">Theo dõi và xử lý toàn bộ đơn hàng của Meat Shop.</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <UInput v-model="filters.search" size="md" icon="i-heroicons-magnifying-glass" placeholder="Tìm mã đơn hoặc khách hàng" class="rounded-full border-brand-light bg-white/70" />
            <USelect v-model="filters.status" :options="statusOptions" class="rounded-full border-brand-light bg-white/70" />
            <UButton icon="i-heroicons-arrow-down-tray" color="primary" variant="soft" class="rounded-full px-4">
              Xuất CSV
            </UButton>
            <UButton icon="i-heroicons-plus" color="primary" class="rounded-full px-4 shadow-emerald-100/60">
              Tạo đơn mới
            </UButton>
          </div>
        </div>
      </template>

      <UTable :rows="orders" :columns="columns" class="text-black">
        <template #code-data="{ row }">
          <NuxtLink :to="`/dashboard/orders/${row.code}`" class="font-medium text-brand-dark transition hover:text-brand-light">
            {{ row.code }}
          </NuxtLink>
        </template>
        <template #status-data="{ row }">
          <UBadge :color="statusColor[row.status]" variant="soft" class="rounded-full px-3 py-1 text-xs">
            <span v-if="row.status === 'pending'">Chờ xử lý</span>
            <span v-else-if="row.status === 'shipping'">Đang giao</span>
            <span v-else>Hoàn tất</span>
          </UBadge>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
