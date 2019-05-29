// Se o paint está disponivel
if ('paintWorklet' in CSS) {
    console.log('paintWorklet');
}

// se a typed om está disponivel
if ('CSSUnitValue' in window) {
    console.log('CSSUnitValue');
}

// se a API de propriedades e valores está disponivel
if ('registerProperty' in CSS) {
    console.log('registerProperty');
    // registra uma nova variavel do css com um nome, a syntaxe dela ou seja a unidade, o valor da unidade e se está herdando
    // pelo que entendi quando você registra por exemplo uma propriedade como length, o browser automaticamente converte em pixels pra ser utilizado pelo paint api
    CSS.registerProperty({
        name: '--tooth-width',
        syntax: '<length>',
        initialValue: '40px',
        inherits: false
    });
    // registra uma nova variavel do css com um nome, a syntaxe dela ou seja a unidade, o valor da unidade e se está herdando
    CSS.registerProperty({
        name: '--tooth-height',
        syntax: '<length>',
        initialValue: '20px',
        inherits: false
    });
}