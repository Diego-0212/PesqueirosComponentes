import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscarEmbarcacao, excluirEmbarcacao } from "../EmbarcacaoServico";

const ExcluirEmbarcacao = () => {
  const { id } = useParams(); // Obtém o ID da embarcação da URL
  const [embarcacao, setEmbarcacao] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    // Função assíncrona para buscar os dados da embarcação pelo ID
    const fetchEmbarcacao = async () => {
      try {
        const response = await buscarEmbarcacao(id);
        setEmbarcacao(response.data);
      } catch (error) {
        console.error("Erro ao buscar embarcação:", error);
      }
    };

    fetchEmbarcacao(); // Chama a função de busca ao montar o componente
  }, [id]);

  const handleExcluir = async () => {
    try {
      await excluirEmbarcacao(id);
      navigator("/produtos");
    } catch (error) {
      console.error("Erro ao excluir embarcação:", error);
    }
  };

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          <h2 className="text-center">Excluir Embarcação</h2>
          <div className="card-body">
            {embarcacao && (
              <div>
                <p><strong>Proprietário:</strong> {embarcacao.proprietario}</p>
                <p><strong>Nome da Embarcação:</strong> {embarcacao.nomeEmbarcacao}</p>
                <p><strong>Arrais:</strong> {embarcacao.arrais}</p>
                <p><strong>Imagem:</strong> {embarcacao.imagem}</p>
                <p><strong>Capacidade:</strong> {embarcacao.capacidade}</p>
                <button onClick={handleExcluir} className="btn btn-danger">Excluir Embarcação</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcluirEmbarcacao;
