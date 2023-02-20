---
to: components/Modal/useModalDialog.tsx
unless_exists: true
---
import { NiceModalHandler, useModal } from "@ebay/nice-modal-react";

type NiceModalArgs<T> = T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
  ? Omit<React.ComponentProps<T>, "id">
  : Record<string, unknown>;

type ModalDialogMethods<T> = {
  closeModal: NiceModalHandler<T>["remove"];
  modalId: NiceModalHandler<T>["id"];
  showModal: NiceModalHandler<T>["show"];
  updateModal: NiceModalHandler<T>["show"];
  isModalVisible: NiceModalHandler<T>["visible"];
};

export type CustomModalHookArguments<T> = Partial<T>;

/**
 * Hook that allows registered modal lifecycle to be controlled.
 */
export function useModalDialog<
  T extends React.FC<any>,
  ComponentProps extends NiceModalArgs<T>,
  PreparedProps extends Partial<ComponentProps> = {} | ComponentProps,
  RemainingProps = Omit<ComponentProps, keyof PreparedProps> & Partial<ComponentProps>
>(
  modal: T,
  args?: PreparedProps
): ModalDialogMethods<T> & {
  showModal: Partial<RemainingProps> extends RemainingProps ? (args?: RemainingProps) => Promise<unknown> : (args: RemainingProps) => Promise<unknown>;
} {
  const modalDialog = useModal(modal, args);

  return {
    // We use .remove to hide the modal because that unmounts the modal completely
    // Useful if there is a form inside the modal so that re-opening the modal resets it properly because it counts as first render again
    closeModal: modalDialog.remove,
    modalId: modalDialog.id,
    showModal: modalDialog.show as ReturnType<typeof useModal>["show"],
    updateModal: modalDialog.show as ReturnType<typeof useModal>["show"],
    isModalVisible: modalDialog.visible,
  };
}
