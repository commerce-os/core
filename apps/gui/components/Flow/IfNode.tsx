import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: 'auto',
};

const IfNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
          Condition: <strong>{data.condition}</strong>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        style={sourceHandleStyleA}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={sourceHandleStyleB}
      />
    </>
  );
};

export default memo(IfNode);