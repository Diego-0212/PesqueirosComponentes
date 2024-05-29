import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizarEmbarcacao, buscarEmbarcacao } from "../EmbarcacaoServico";

const AtualizarEmbarcacao = () => {
  const { id } = useParams(); // Obtém o ID da embarcação da URL
  const [proprietario, setProprietario] = useState("");
  const [nomeEmbarcacao, setNomeEmbarcacao] = useState("");
  const [arrais, setArrais] = useState("");
  const [imagem, setImagem] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    // Função assíncrona para buscar os dados da embarcação pelo ID
    const fetchEmbarcacao = async () => {
      try {
        const response = await buscarEmbarcacao(id);
        const embarcacao = response.data;
        // Define os valores recuperados do backend nos estados locais
        setProprietario(embarcacao.proprietario);
        setNomeEmbarcacao(embarcacao.nomeEmbarcacao);
        setArrais(embarcacao.arrais);
        setImagem(embarcacao.imagem);
        setCapacidade(embarcacao.capacidade);
      } catch (error) {
        console.error("Erro ao buscar embarcação:", error);
      }
    };

    fetchEmbarcacao(); // Chama a função de busca ao montar o componente
  }, [id]);

  const saveEmbarcacao = async (e) => {
    e.preventDefault();
    const embarcacaoAtualizada = {
      proprietario,
      nomeEmbarcacao,
      arrais,
      imagem,
      capacidade
    };
    try {
      await atualizarEmbarcacao(id, embarcacaoAtualizada);
      navigator("/produtos");
    } catch (error) {
      console.error("Erro ao atualizar embarcação:", error);
    }
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          <h2 className="text-center">Atualizar Embarcação</h2>
          <div className="card-body">
            <form onSubmit={saveEmbarcacao}>
              <div className="form-group mb-2">
                <label className="form-label">Proprietário:</label>
                <input
                  type="text"
                  value={proprietario}
                  className="form-control"
                  onChange={(e) => setProprietario(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Nome da Embarcação:</label>
                <input
                  type="text"
                  value={nomeEmbarcacao}
                  className="form-control"
                  onChange={(e) => setNomeEmbarcacao(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Arrais:</label>
                <input
                  type="text"
                  value={arrais}
                  className="form-control"
                  onChange={(e) => setArrais(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Imagem:</label>
                <input
                  type="text"
                  value={imagem}
                  className="form-control"
                  onChange={(e) => setImagem(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Capacidade:</label>
                <input
                  type="text"
                  value={capacidade}
                  className="form-control"
                  onChange={(e) => setCapacidade(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Atualizar Embarcação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtualizarEmbarcacao;
