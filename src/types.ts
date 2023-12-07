export type Service = {
  name: string;
  login: string;
  password: string;
  url: string;
};

export type FormProps = {
  handleSwitch: () => void;
  service: Service[];
  setService: (service: Service[]) => void;
};
