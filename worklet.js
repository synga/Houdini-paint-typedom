if (typeof registerPaint !== 'undefined') {
    class PlaceholderBoxPropsPainter {
        // define um get para uma propriedades do css que estão vindo do seletor que ta usando esse worklet
        // isso é feito pela Typed OM
      static get inputProperties() {
        // retorna o width da borda e a cor, pega uma especifica, mas todas são iguais
        return ['border-top-width', 'border-top-color'];
      }
  
      // Crio o paint, feito pela Paint API
      paint(ctx, size, props) {
        // valores padrões
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#666';
  
        // Se existe o valor do width da borda seta ele como o valor padrão da linha do contexto
        let borderTopWidthProp = props.get('border-top-width');
        if (borderTopWidthProp) {
          ctx.lineWidth = borderTopWidthProp.value;
        }
  
        // se existe a cor da borda seta ela como padrão para os valores de fill e stroke
        let borderTopColorProp = props.get('border-top-color');
        if (borderTopColorProp) {
          ctx.strokeStyle = borderTopColorProp.toString();
          ctx.fillStyle = borderTopColorProp.toString();
        }
  
        // começa um caminho e move pro canto superior esquerdo, então desenha uma linha até o inferor direito
        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(size.width, size.height);
        // ctx.stroke();
  
        // move pro canto inferior esquerdo e cria uma linha até o canto superior direito
        // ctx.beginPath();
        // ctx.moveTo(size.width, 0);
        // ctx.lineTo(0, size.height);
        // ctx.stroke();

        // vai começar um caminho no canvas
        ctx.beginPath();
        // cria uma elipse no meio da forma que vai ser responsiva
        ctx.ellipse(size.width / 2, size.height / 2, size.width / 2, size.height / 2, 0, 0, 2 * Math.PI);
        // cria a elipse apenas com o contorno, sem ser preenchida pela cor
        ctx.stroke();
      }
    }
  
    // Registra um paint com um nome e a classe usada
    registerPaint('placeholder-box-props', PlaceholderBoxPropsPainter);
  }