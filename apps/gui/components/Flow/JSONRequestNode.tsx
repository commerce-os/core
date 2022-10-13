import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const sourceHandleStyle: CSSProperties = {};

const JSONRequestNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
          URL: <input type="text" value={data.url} />
          Method: <strong>{data.method}</strong>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="main"
        style={sourceHandleStyle}
      />
    </>
  );
};

export default memo(JSONRequestNode);