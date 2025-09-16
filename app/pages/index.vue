<template>
  <div class="space-y-12">
    <section class="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div class="space-y-6">
        <h1 class="section-heading">Quản lý Meat Shop dễ dàng với bảng điều khiển tập trung</h1>
        <p class="text-lg text-neutral-700">
          Theo dõi tồn kho, xử lý đơn hàng và cập nhật giá bán theo thời gian thực. Giao diện Nuxt UI giúp đội ngũ của bạn thao tác nhanh chóng trên mọi thiết bị.
        </p>
        <div class="flex flex-wrap gap-3">
          <UButton to="/login" size="lg" color="primary" class="shadow-emerald-200/60 transition hover:-translate-y-0.5">
            Bắt đầu
          </UButton>
          <UButton to="/dashboard" size="lg" variant="soft" color="primary" class="transition hover:scale-[1.02]">
            Xem demo dashboard
          </UButton>
        </div>
      </div>
      <UCard class="card-ambient fade-up">
        <img src="https://images.unsplash.com/photo-1551218370-49e9d2bfa041?auto=format&fit=crop&w=900&q=80" alt="Fresh meat" class="h-full w-full rounded-lg object-cover" />
      </UCard>
    </section>

    <section class="space-y-6">
      <div class="flex items-center gap-3">
        <span class="pill-ambient">Tính năng nổi bật</span>
        <h2 class="text-2xl font-semibold text-black">Nền tảng tối ưu cho cửa hàng thịt tươi</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <UCard class="card-ambient fade-up">
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-sparkles" class="h-7 w-7 text-brand-dark" />
              <p class="text-base font-semibold text-black">Quản lý sản phẩm chi tiết</p>
            </div>
          </template>
          <p class="text-sm text-neutral-700">Phân loại thịt theo lô hàng, trạng thái tồn kho và cảnh báo hạn sử dụng.</p>
        </UCard>

        <UCard class="card-ambient fade-up">
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-bolt" class="h-7 w-7 text-brand-dark" />
              <p class="text-base font-semibold text-black">Xử lý đơn siêu tốc</p>
            </div>
          </template>
          <p class="text-sm text-neutral-700">Giỏ hàng nhiều bước, lịch giao hàng linh hoạt và cập nhật trạng thái realtime.</p>
        </UCard>

        <UCard class="card-ambient fade-up">
          <template #header>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-presentation-chart-line" class="h-7 w-7 text-brand-dark" />
              <p class="text-base font-semibold text-black">Báo cáo thông minh</p>
            </div>
          </template>
          <p class="text-sm text-neutral-700">Theo dõi doanh thu, chi phí và biên lợi nhuận của từng mặt hàng.</p>
        </UCard>
      </div>
    </section>
  </div>
</template>
