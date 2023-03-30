import type { App, Component } from 'vue'


export const withInstall = <T extends Component>(component: T, alias?: string) => {
  (component as Record<string, unknown>).install = (app: App) => {
    const compName = alias || component.name
    if (!compName)
      return
    app.component(compName, component)
  }
  return component
}
