import React from 'react';
import { AnchorPosition } from '../Mui/Menu/useMuiMenu';
import { useMenuItem, Menu } from '../Mui';

interface Props {
  anchorPosition?: AnchorPosition;
  onClose(): void;
  onDelete(): void;
}

export function TaskMenu({ anchorPosition, onClose, onDelete }: Props) {
  const MenuItem = useMenuItem(onClose);

  return (
    <Menu
      open={Boolean(anchorPosition)}
      onClose={onClose}
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
    >
      <MenuItem text="Delete" onClick={onDelete} />
      <MenuItem text="Add date/time" />
      <MenuItem text="Add a subtask" />
      <MenuItem text="Indent" />
      <MenuItem text="Move to another list" />
    </Menu>
  );
}
