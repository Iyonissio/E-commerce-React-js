import React from 'react'
import { ProdutosContainer,
ProdutosHeading,
ProdutosWraper,
ProdutosCard,
ProdutosImg,
ProdutosInfo,
ProdutosTitulo,
ProdutosDesc,
ProdutosPrice,
ProdutosButton } from './ProdutosElements';

const Produtos = ({heading,data}) => {
    return (
        <ProdutosContainer>
            <ProdutosHeading>{heading}</ProdutosHeading>
            <ProdutosWraper>
                {data.map((produto, index) => {
                    return(
                        <ProdutosCard key={index}>
                            <ProdutosImg src={produto.img} alt={produto.alt} />
                            <ProdutosInfo>
                                <ProdutosTitulo>{produto.nome}</ProdutosTitulo>
                                <ProdutosDesc>{produto.desc}</ProdutosDesc>
                                <ProdutosPrice>{produto.price}</ProdutosPrice>
                                <ProdutosButton>{produto.button}</ProdutosButton>
                            </ProdutosInfo>
                        </ProdutosCard>
                    )
                })}
            </ProdutosWraper>
        </ProdutosContainer>
    )
}

export default Produtos;
