import WujieVue from 'wujie-vue3'

const { setupApp } = WujieVue

/**
 * @description
 * port 开发环境端口，自行修改
 * prefix 最好是/path/ 的格式 ，防止出现 /path2/也匹配上的问题
 */
export const microViewAppList = [{
  name: 'fdp',
  prefix: '/web/fdp/',
  port: '8849',
}, {
  name: 'bdp',
  prefix: '/web/bdp/',
  port: '8850',
}, {
  name: 'bsp',
  prefix: '/web/bsp/',
  port: '8851',
}, {
  name: 'riskAssessmentWeb',
  prefix: '/web/risk-assessment-web/',
  port: '8852',
}, {
  name: 'monitorWarn',
  prefix: '/web/monitor-warn/',
  port: '8853',
}, {
  name: 'emergencyPlanBusinessWeb',
  prefix: '/web/emergency-plan-business-web/',
  port: '8854',
}, {
  name: 'planPublicWeb',
  prefix: '/web/emergency-plan-public-web/',
  port: '8855',
}, {
  name: 'dualControl',
  prefix: '/web/dual-control/',
  port: '8856',
}, {
  name: 'cmdbWeb',
  prefix: '/web/cmdb-web/',
  port: '8857',
}]

// 是否是微前端应用
export function getMicroViewAppInfo(path: any) {
  if (!path) {
    return
  }
  return microViewAppList.find((item: any) => path.startsWith(item.prefix))
}

let isSetup = false
const option = {
  exec: true,
  alive: true,
  plugins: [
    {
      cssAfterLoaders: [
        // 在加载html所有样式之后添加一个内联样式
        { content: '.el-popper,.el-tooltip__popper {position: absolute !important;}' },
      ],
    },
  ],
}
export function setupAllApp() {
  if (!isSetup) {
    microViewAppList.forEach(({ port, prefix, name }: any) => {
      setupApp({
        name,
        url: import.meta.env.MODE === 'development' ? `http://localhost:${port}` : `${location.origin}${prefix}`,
        ...option,
      })
    })
    isSetup = true
  }
}
