export interface IAction {
    type: string,
    displayName: string,
    id: string,
    inputs: IActionInputs,
    outputs: IActionOutputs,
    execute(context: IActionContext): Promise<IActionResult>
}

export interface IActionInputs {
    [key: string]: IActionInput
}
export interface IActionOutputs{
    [key: string]: IActionOutput
}
export interface IActionInput { 
    name: string,
    data: Record<string, unknown> 
}
export type IActionOutput = {
    name: string,
    handler:  (context: IActionContext) => Promise<IActionResult> // the output handler = action.execute of the next action in the stack
}

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
    prevActionResults:  Record<string, IActionResult>
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
    execStack?: [{ // TODO
        actionName: string,
        flowEdgeId: string
    }],
    contextData?: Record<string, unknown> // TODO
    run()
    load(fileName: string)
}