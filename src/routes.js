import axios from 'axios'

import Home from './containers/Home'
import Licenses from './containers/Licenses'
import LicenseDetail from './containers/LicenseDetail'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/licenses',
    component: Licenses,
    fetchInitialData: () =>
      axios({
        method: 'GET',
        url: 'https://api.github.com/licenses',
        headers: {
          authorization: `Bearer ${__GITHUB_TOKEN__}`,
        },
      }),
  },
  {
    path: '/license/:id',
    component: LicenseDetail,
    fetchInitialData: (path = '') =>
      axios({
        method: 'GET',
        url: `https://api.github.com/licenses/${path.split('/').pop()}`,
        headers: {
          authorization: `Bearer ${__GITHUB_TOKEN__}`,
        },
      }),
  },
]

export default routes
