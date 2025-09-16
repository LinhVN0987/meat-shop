<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const loading = ref(false)
const toast = useToast()

definePageMeta({
  layout: 'auth',
  title: 'Đăng nhập'
})

const handleSubmit = async () => {
  if (!form.email || !form.password) {
    toast.add({
      id: 'missing-fields',
      title: 'Vui lòng nhập đầy đủ thông tin',
      color: 'orange'
    })
    return
  }

  loading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 800))
    toast.add({
      id: 'login-success',
      title: 'Đăng nhập thành công',
      description: 'Chào mừng trở lại Meat Shop!'
    })
    await navigateTo('/dashboard')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UForm :state="form" @submit="handleSubmit">
    <UCard class="card-ambient fade-up">
      <template #header>
        <div class="flex flex-col gap-1 text-center">
          <h1 class="text-3xl font-semibold text-black drop-shadow-sm">Đăng nhập hệ thống</h1>
          <p class="text-sm text-neutral-600">Quản lý cửa hàng thịt tươi của bạn mọi lúc, mọi nơi.</p>
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <UFormGroup label="Email" name="email" required class="text-black">
          <UInput v-model="form.email" type="email" placeholder="ban@meatshop.vn" size="lg" class="rounded-lg border-brand-light/60 bg-white/80" />
        </UFormGroup>

        <UFormGroup label="Mật khẩu" name="password" required class="text-black">
          <UInput v-model="form.password" type="password" placeholder="********" size="lg" class="rounded-lg border-brand-light/60 bg-white/80" />
        </UFormGroup>

        <div class="flex items-center justify-between text-sm text-neutral-600">
          <UCheckbox v-model="form.remember" label="Ghi nhớ đăng nhập" />
          <NuxtLink to="#" class="text-brand-dark hover:underline">Quên mật khẩu?</NuxtLink>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-col gap-4">
          <UButton type="submit" size="lg" color="primary" block :loading="loading" class="rounded-full shadow-emerald-100/60">
            Đăng nhập
          </UButton>
          <p class="text-center text-sm text-neutral-600">
            Chưa có tài khoản?
            <NuxtLink to="#" class="text-brand-dark hover:underline">Liên hệ quản trị viên</NuxtLink>
          </p>
        </div>
      </template>
    </UCard>
  </UForm>
</template>
