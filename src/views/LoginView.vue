<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { HOME_ROUTE } from '@/units/const'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import { useUserStore } from '@/stores/useUserStore'

const form = reactive({
  login: 'test@gmaiil.com',
  pass: 'Sloboda123!',
  remember: true
})

const userStore = useUserStore()
const router = useRouter()

const submit = async () => {
  console.log(form)
  try {
    await userStore.login(form.login, form.pass);
    alert("Login successful!");
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

const logout = async () => {
  try {
    await userStore.logout();
    alert("Logout successful!");
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton @click="logout" color="info" label="Out" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
