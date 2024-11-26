<script setup>
import { mdiAccountGroupOutline, mdiPlus } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccountGroupOutline" title="Teame" main>
        <BaseButton
          :icon="mdiPlus"
          label="Add new"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableSampleClients checkable />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
