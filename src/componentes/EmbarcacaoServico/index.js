import axios from "axios";
const url = "http://localhost:8080/pesqueiros/embarcacoes";
export const listaDeEmbarcacao = () => axios.get(url);
export const cadastroDeEmbarcacao = (embarcacao) => axios.post(url, embarcacao);
export const atualizarEmbarcacao  = (id, embarcacao) => axios.put(url + "/" + id, embarcacao);
export const excluirEmbarcacao = (id)=> axios.delete(url + "/" + id);
export const buscarEmbarcacao = (id)=> axios.get(url + "/" + id);