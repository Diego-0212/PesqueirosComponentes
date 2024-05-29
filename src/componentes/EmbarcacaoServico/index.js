import axios from "axios";
const url = "http://localhost:8080/pesqueiros/embarcacoes";
export const listaDeEmbarcacao = () => axios.get(url);
export const cadastroDeEmbarcacao = () => axios.get(url);
export const atualizarEmbarcacao  = () => axios.get(url);
export const excluirEmbarcacao = ()=> axios.get(url);
export const buscarEmbarcacao = ()=> axios.get(url);