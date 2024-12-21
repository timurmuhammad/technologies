import { RequestMethod } from "./RequestMethod.enum";

export default interface IConfigRequest {
    method: RequestMethod,
    path: string,
    data?: Record<string, any>,
    isParamData?: boolean
}