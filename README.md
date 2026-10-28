# Milena Targino Acessórios

Loja virtual responsiva para apresentar **prata 925** e **acessórios folheados**, com identidade visual inspirada na logo enviada: off-white, dourado, grafite e toques suaves de lilás/rosé.

## Estrutura do projeto

```text
Site-shop/
├── index.html
├── README.md
├── assets/
│   ├── logo.svg
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── pages/
    ├── cuidados.html
    ├── garantia.html
    ├── loja.html
    └── tamanhos.html
```

## O que já existe

- Página inicial responsiva, navegação e categorias.
- Filtros de material, tipo de peça e estilo.
- Cartões demonstrativos de produtos e sacola demonstrativa.
- Página de cuidados para prata 925 e folheados.
- Página de garantia e trocas com campos que precisam de confirmação da loja.
- Guia de tamanhos com calculadora orientativa para anéis e orientações de colares/pulseiras.
- Página da loja física preparada para endereço, horário, fotos, mapa e retirada.
- Botão de WhatsApp preparado para configurar o número oficial.
- Logo SVG estilizada em dourado para uso no site.

## Antes de vender de verdade

1. Em `assets/js/main.js`, configure `WHATSAPP_NUMBER` com DDI, DDD e número oficial, somente dígitos.
2. Substitua as artes decorativas dos produtos por fotos reais em alta resolução, incluindo fotos macro e fotos no corpo. Não usar os cartões ilustrativos como se fossem fotografias reais.
3. Cadastre produtos reais com nome, preço, SKU, estoque, material confirmado, tamanho, composição, espessura/camadas do banho quando fornecidas, política de garantia e informação sobre níquel apenas quando confirmada pelo fornecedor.
4. Atualize `pages/garantia.html` com os prazos e condições oficiais. Não prometa garantia eterna para toda a peça; diferencie autenticidade, defeitos e desgaste por uso.
5. Em `pages/loja.html`, informe endereço, horários, telefone e fotos reais. Só adicione mapa quando o endereço estiver confirmado.
6. Confirme procedimento de retirada, estoque, frete, pagamentos, política de troca/devolução e privacidade.
7. A sacola atual é demonstrativa e não processa pagamento nem registra pedidos. Para venda real, integre checkout/plataforma de e-commerce ou um fluxo de pedidos verificado.
8. Para publicar gratuitamente pelo GitHub Pages: no repositório, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione **main** e a pasta **/(root)** e salve. Aguarde a publicação.

## Personalização da identidade visual

As cores ficam no início de `assets/css/style.css` em `:root`. A logo SVG atual é uma versão vetorial inspirada no monograma e na paleta da referência. Para usar a imagem original exata, adicione o arquivo da logo original à pasta `assets/` e atualize os caminhos das imagens no HTML.

## Nota

Este projeto é um front-end inicial, sem backend, checkout, inventário ou pagamentos. Confirme as informações comerciais e legais com a loja antes de publicar e aceitar pedidos.