import './Notfound.css'
import React, { useEffect } from 'react';
import $ from 'jquery'; // Importa jQuery

export const NotFound = () => {

  useEffect(() => {
    // Este código se ejecutará una vez que el componente esté montado
    $(function () {
      var liWidth = $("li").css("width");
      $("li").css("height", liWidth);
      $("li").css("lineHeight", liWidth);
      var totalHeight = $("#wordsearch").css("width");
      $("#wordsearch").css("height", totalHeight);
    });

    $(window).resize(function () {
      $("h1, h2, h3, p").css("z-index", 1);
    });

    $(window).on('resize', function () {
      var liWidth = $(".one").css("width");
      $("li").css("height", liWidth);
      $("li").css("lineHeight", liWidth);
      var totalHeight = $("#wordsearch").css("width");
      $("#wordsearch").css("height", totalHeight);
    });

    $(function () {
      /* Animaciones */
      $(this).delay(1500).queue(function () {
        $(".one").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".two").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".three").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".four").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".five").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".six").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".seven").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".eight").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".nine").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".ten").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".eleven").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".twelve").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".thirteen").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".fourteen").addClass("selected");
        $(this).dequeue();
      })
      .delay(500).queue(function () {
        $(".fifteen").addClass("selected");
        $(this).dequeue();
      });

    });

    // Limpiar el script cuando el componente se desmonte
    return () => {
      $(window).off('resize');  // Limpiar el evento de resize
    };

  }, []);  // Se ejecuta solo una vez, cuando el componente se monta

  return (
    <>
      <div id="wrap">
        <div id="wordsearch">
          <ul>
            <li>k</li>
            <li>v</li>
            <li>n</li>
            <li>z</li>
            <li>i</li>
            <li>x</li>
            <li>m</li>
            <li>e</li>
            <li>t</li>
            <li>a</li>
            <li>x</li>
            <li>l</li>
            <li className="one">4</li>
            <li className="two">0</li>
            <li className="three">4</li>
            <li>y</li>
            <li>y</li>
            <li>w</li>
            <li>v</li>
            <li>b</li>
            <li>o</li>
            <li>q</li>
            <li>d</li>
            <li>y</li>
            <li>p</li>
            <li>a</li>
            <li className="four">p</li>
            <li className="five">a</li>
            <li className="six">g</li>
            <li className="seven">e</li>
            <li>v</li>
            <li>j</li>
            <li>a</li>
            <li className="eight">n</li>
            <li className="nine">o</li>
            <li className="ten">t</li>
            <li>s</li>
            <li>c</li>
            <li>e</li>
            <li>w</li>
            <li>v</li>
            <li>x</li>
            <li>e</li>
            <li>p</li>
            <li>c</li>
            <li>f</li>
            <li>h</li>
            <li>q</li>
            <li>e</li>
            <li className="eleven">f</li>
            <li className="twelve">o</li>
            <li className="thirteen">u</li>
            <li className="fourteen">n</li>
            <li className="fifteen">d</li>
            <li>s</li>
            <li>w</li>
            <li>q</li>
            <li>v</li>
            <li>o</li>
            <li>s</li>
            <li>m</li>
            <li>v</li>
            <li>f</li>
            <li>u</li>
          </ul>
        </div>

        <div id="main-content">
          <h1>Parece que no hemos encontrado lo que estabas buscando.</h1>

          <p>desafortunadamente no encontramos la pagina que estabas buscando. It may be
          puede que este temporalmente inaccesible, en otra direccion o ya no exista.</p>

          <p>Check the URL you entered for any mistakes and try again. Alternatively, search
          for whatever is missing or take a look around the rest of our site.</p>

          <div id="navigation">
            <a className="navigation" href="/">Home</a>
            <a className="navigation" href="/about">About Us</a>
            <a className="navigation" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  )
}
