import { push } from "connected-react-router";

export const Voltar = () => dispatch => {
  dispatch(push("/"));
};

export const SairSistema = () => dispatch => {
  dispatch(push("/"));
};

