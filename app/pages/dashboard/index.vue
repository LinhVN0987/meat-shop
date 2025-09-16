<script setup lang="ts">
import { computed } from 'vue'

const stats = [
  {
    label: 'Doanh thu hôm nay',
    value: '₫12.5M',
    change: '+8.4%',
    icon: 'i-heroicons-banknotes',
    positive: true
  },
  {
    label: 'Đơn hàng mới',
    value: '42',
    change: '+5',
    icon: 'i-heroicons-document-plus',
    positive: true
  },
  {
    label: 'Đơn đang xử lý',
    value: '18',
    change: '-3',
    icon: 'i-heroicons-clock',
    positive: false
  },
  {
    label: 'Hàng tồn kho thấp',
    value: '7 sản phẩm',
    change: '+2',
    icon: 'i-heroicons-exclamation-triangle',
    positive: false
  }
]

const orderColumns = [
  { id: 'code', key: 'code', label: 'Mã đơn' },
  { id: 'customer', key: 'customer', label: 'Khách hàng' },
  { id: 'items', key: 'items', label: 'Sản phẩm' },
  { id: 'total', key: 'total', label: 'Tổng tiền' },
  { id: 'status', key: 'status', label: 'Trạng thái' },
  { id: 'createdAt', key: 'createdAt', label: 'Thời gian' }
]

const recentOrders = [
  {
    code: 'DH-2301',
    customer: 'Trần Thị B',
    items: '3 sản phẩm',
    total: '₫1.280.000',
    status: 'pending',
    createdAt: '09:42 hôm nay'
  },
  {
    code: 'DH-2298',
    customer: 'Công ty Ẩm thực ABC',
    items: '12 sản phẩm',
    total: '₫5.640.000',
    status: 'shipping',
    createdAt: 'Hôm qua, 20:15'
  },
  {
    code: 'DH-2294',
    customer: 'Nguyễn Văn C',
    items: '6 sản phẩm',
    total: '₫2.420.000',
    status: 'completed',
    createdAt: 'Hôm qua, 16:02'
  },
  {
    code: 'DH-2289',
    customer: 'Nhà hàng Hương Sạch',
    items: '24 sản phẩm',
    total: '₫9.980.000',
    status: 'completed',
    createdAt: '17/02, 11:48'
  }
]

const inventoryAlerts = [
  {
    product: 'Thăn nội bò Úc',
    remain: '24 kg',
    threshold: '20 kg',
    status: 'warning'
  },
  {
    product: 'Ba rọi heo đặc sản',
    remain: '15 kg',
    threshold: '30 kg',
    status: 'critical'
  },
  {
    product: 'Ức gà hữu cơ',
    remain: '42 kg',
    threshold: '40 kg',
    status: 'stable'
  }
]

definePageMeta({
  layout: 'dashboard',
  title: 'Tổng quan'
})

const statusColor = computed(() => ({
  pending: 'orange',
  shipping: 'blue',
  completed: 'green'
}))

const inventoryColor = computed(() => ({
  warning: 'amber',
  critical: 'red',
  stable: 'green'
}))
</script>

<template>
  <div class="space-y-8">
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <UCard v-for="card in stats" :key="card.label" class="card-ambient fade-up">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm text-neutral-500">{{ card.label }}</p>
            <p class="mt-3 text-3xl font-semibold text-black">{{ card.value }}</p>
          </div>
          <UBadge :color="card.positive ? 'green' : 'red'" variant="soft" class="rounded-full px-2 py-1 text-xs">
            {{ card.change }}
          </UBadge>
        </div>
        <UIcon :name="card.icon" class="mt-6 h-10 w-10 text-brand-dark" />
      </UCard>
    </div>

    <div class="grid gap-6 xl:grid-cols-3">
      <UCard class="card-ambient fade-up xl:col-span-2">
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-black drop-shadow-sm">Đơn hàng gần đây</h2>
              <p class="text-sm text-neutral-500">Theo dõi tiến độ xử lý các đơn hàng mới nhất.</p>
            </div>
            <UButton to="/dashboard/orders" color="primary" variant="soft" class="rounded-full px-4">
              Xem tất cả
            </UButton>
          </div>
        </template>

        <UTable :rows="recentOrders" :columns="orderColumns" class="text-black">
          <template #code-data="{ row }">
            <span class="font-medium text-brand-dark">{{ row.code }}</span>
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

      <div class="space-y-6">
        <UCard class="card-ambient fade-up">
          <template #header>
            <h2 class="text-lg font-semibold text-black">Cảnh báo tồn kho</h2>
          </template>

          <ul class="space-y-4">
            <li v-for="item in inventoryAlerts" :key="item.product" class="flex items-start justify-between">
              <div>
                <p class="font-medium text-black">{{ item.product }}</p>
                <p class="text-sm text-neutral-500">Còn lại: {{ item.remain }} • Ngưỡng: {{ item.threshold }}</p>
              </div>
              <UBadge :color="inventoryColor[item.status]" variant="soft" class="rounded-full px-3 py-1 text-xs">
                <span v-if="item.status === 'critical'">Rất thấp</span>
                <span v-else-if="item.status === 'warning'">Cần nhập thêm</span>
                <span v-else>Ổn định</span>
              </UBadge>
            </li>
          </ul>
        </UCard>

        <UCard class="card-ambient fade-up">
          <template #header>
            <h2 class="text-lg font-semibold text-black">Nhắc việc hôm nay</h2>
          </template>

          <ul class="space-y-3 text-sm text-neutral-700">
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-brand-dark" />
              <span>Kiểm tra chất lượng lô thịt bò mới nhập sáng nay.</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-brand-dark" />
              <span>Gửi báo giá cho khách hàng nhà hàng Sài Gòn Xanh.</span>
            </li>
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-brand-dark" />
              <span>Cập nhật chương trình khuyến mãi cuối tuần.</span>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </div>
</template>
