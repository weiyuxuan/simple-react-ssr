import Home from './src/containers/Home'
import Licenses from './src/containers/Licenses'
import LicenseDetail from './src/containers/LicenseDetail'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/licenses',
    component: Licenses,
  },
  {
    path: '/license/:id',
    component: LicenseDetail,
  },
]

export default routes
