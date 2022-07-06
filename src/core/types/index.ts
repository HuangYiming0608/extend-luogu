import { Exlg } from '..'

export type {
    Module,
    ModuleCtl,
    ModuleExports,
    ModuleMetadata,
    ModuleRuntime,
    ModuleWrapper,
    Modules,
    ModuleReadonly,
    ModulesReadonly
} from '../module'

export type { Utils } from '../utils'

export type {
    Storage,
    Schema,
    Schemas,
    SchemaToStorage,
    SchemaToType
} from '../storage'

export type { Exlg } from '..'

declare global {
    interface Window {
        exlg: Exlg
    }
}
