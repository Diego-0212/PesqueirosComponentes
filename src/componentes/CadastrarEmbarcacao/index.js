import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastroDeEmbarcacao } from "../EmbarcacaoServico";

export const CadastrarEmbarcacao = () => {
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [NomeEmbarcacao, setEmbarcacao] = useState("");
    const [arrais, setArrais] = useState("");
    const [imagem, setImagem] = useState("");
    const [capacidade, setCapacidade] = useState("");
    const navigator = useNavigate();

    const manipulaDescricao = (e) => setDescricao(e.target.value);
    const manipulaCategoria = (e) => setCategoria(e.target.value);
    const manipulaEmbarcacao = (e) => setEmbarcacao(e.target.value);
    const manipulaArrais = (e) => setArrais(e.target.value);
    const manipulaImagem = (e) => setImagem(e.target.value);
    const manipulaCapacidade = (e) => setCapacidade(e.target.value);

    const saveEmbarcacao = (e) => {
        e.preventDefault();
        const produto = {
            descricao,
            categoria,
            NomeEmbarcacao,
            arrais,
            imagem,
            capacidade
        };
        console.log(produto);
        cadastroDeEmbarcacao(produto).then((response) => {
            console.log(response.data);
            navigator("/produtos");
        });
    };

    return (
        <div className="container">
            <br /> <br />
            <div className="row">
                <div className="card">
                    <h2 className="text-center"> Cadastrar Embarcacao</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label"> Descrição:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com a descrição do produto"
                                    name="descricao"
                                    value={descricao}
                                    className="form-control"
                                    onChange={manipulaDescricao}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Categoria:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com a categoria a qual o produto pertence"
                                    name="categoria"
                                    value={categoria}
                                    className="form-control"
                                    onChange={manipulaCategoria}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Nome da Embarcação:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com o nome da embarcação"
                                    name="nomeEmbarcacao"
                                    value={NomeEmbarcacao}
                                    className="form-control"
                                    onChange={manipulaEmbarcacao}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Arrais:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com os arrais"
                                    name="arrais"
                                    value={arrais}
                                    className="form-control"
                                    onChange={manipulaArrais}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Imagem:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com a URL da imagem"
                                    name="imagem"
                                    value={imagem}
                                    className="form-control"
                                    onChange={manipulaImagem}
                                ></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"> Capacidade:</label>
                                <input
                                    type="text"
                                    placeholder="Entre com a capacidade"
                                    name="capacidade"
                                    value={capacidade}
                                    className="form-control"
                                    onChange={manipulaCapacidade}
                                ></input>
                            </div>
                            <button className="btn btn-success" onClick={saveEmbarcacao}>
                                Submit{" "}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CadastrarEmbarcacao;