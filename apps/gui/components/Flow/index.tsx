import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
} from 'reactflow';
import IfNode from './IfNode';

import styles from './Flow.module.css';
import JSONRequestNode from './JSONRequestNode';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { 
        url: 'https://dummyjson.com/products',
        method: 'GET' 
    },
    position: { x: 100, y: 100 },
    type: 'jsonrequest',
    className: styles.jsonRequestNode,
  },
  {
    id: '2',
    data: { 
        condition: 'total > 0' 
    },
    position: { x: 100, y: 200 },
    type: 'if',
    className: styles.ifNode,
  },
  {
    id: '3',
    data: { 
        url: 'https://dummyjson.com/products',
        method: 'POST' 
    },
    position: { x: 100, y: 300 },
    type: 'jsonrequest',
    className: styles.jsonRequestNode,
  },
  {
    id: '4',
    data: { 
        url: 'https://dummyjson.com/products',
        method: 'POST' 
    },
    position: { x: 350, y: 300 },
    type: 'jsonrequest',
    className: styles.jsonRequestNode,
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },  
];

const nodeTypes = {
  if: IfNode,
  jsonrequest: JSONRequestNode
};

const defaultEdgeOptions = {
  animated: true,
  type: 'smoothstep',
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <div className={styles.flow}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      />
    </div>
  );
}

export default Flow;