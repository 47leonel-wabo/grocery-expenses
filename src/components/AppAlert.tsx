interface Props {
  message: string;
  type?: string;
  handleClose: () => void;
}

const AppAlert = ({ message, type = "alert-warning", handleClose }: Props) => {
  return (
    <div className={`alert ${type} alert-dismissible fade show`} role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default AppAlert;
