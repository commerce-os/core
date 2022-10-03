export interface IAction {
    type: string,
    displayName: string,
    id: string,
    inputs: IActionInputs,
    outputs: IActionOutputs,
    execute(context: IActionContext): Promise<IActionResult>
}

export interface IActionInputs {
    [key: string]: IActionInputType
}
export interface IActionOutputs {
    [key: string]: IActionOutputType
}
type IActionInputType = any // TODO
type IActionOutputType = any // TODO

export interface IActionResult {
    outputs: IActionOutputs,
    status: {
        code: number,
        message: string
    }
}

export interface IActionContext {
    prevActionId: string,
    prevActionResult: IActionResult,
    workflow: IWorkflow
}

export interface IActionList {
    [key: string]: IAction
}

export interface IWorkflow {
    actions: IActionList,
    connections: [{
        id: string,
        source: string,
        target: string
    }],
    execStack: [{ // TODO
        actionName: string,
        flowEdgeId: string
    }],
    contextData: any // TODO
    execute()
}