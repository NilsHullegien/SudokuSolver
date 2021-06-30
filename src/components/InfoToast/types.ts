export interface InfoToastProps {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  message: string;
  headerText: string;
}
