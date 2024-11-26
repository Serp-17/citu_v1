import {
  mdiMonitor,
  mdiDomain,
  mdiAccountGroupOutline
} from '@mdi/js'
import {
  HOME_ROUTE,
  PROJECTS_ROUTE,
  TEAME_ROUTE
} from '@/units/const'

export default [
  {
    to: HOME_ROUTE,
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: PROJECTS_ROUTE,
    icon: mdiDomain,
    label: 'Projects'
  },
  {
    to: TEAME_ROUTE,
    icon: mdiAccountGroupOutline,
    label: 'Teame'
  },
]
