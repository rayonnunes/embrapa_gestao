
 /*
Template Name: Codefox - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Version: 2.0.0
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Dashboard init js
*/

!function($) {
    "use strict";

    var Dashboard = function() {};

    Dashboard.prototype.init = function () {

      //combined chart
      c3.generate({
        bindto: '#combine-chart',
        data: {
          columns: [
            ['Despesas', 30, 20, 50, 40, 60, 50],
            ['Receitas', 300, 200, 160, 400, 250, 250],
            ['Investimentos', 200, 130, 90, 240, 130, 220],
          ],
          types: {
            Despesas: 'line',
            Receitas: 'line',
            Investimentos: 'line',
          },
          colors: {
            Despesas: '#f7531f',
            Receitas: '#78c350',
            Investimentos: '#ff9800',
          }
        },
        axis: {
          x: {
            type: 'categorized'
          }
        }
      });

      //roated chart
      c3.generate({
        bindto: '#roated-chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ],
          types: {
            data1: 'bar'
          },
          colors: {
            data1: '#1ea69a',
            data2: '#f7531f'
          }
        },
        axis: {
          rotated: true,
          x: {
            type: 'categorized'
          }
        }
      });

      //Donut Chart
      c3.generate({
        bindto: '#donut-chart',
        data: {
          columns: [
            ['Alimentação', 25],
            ['Forragem', 20],
            ['Rebanho', 18],
            ['Sanidade', 2],
            ['Mão de Obra', 7],
            ['Manutenção', 6],
            ['Custos Gerais', 22]
          ],
          type : 'donut'
        },
        donut: {
          title: "Despesas",
          width: 40,
          label: {
            show:false
          }
        },
        color: {
          pattern: ["#348cd4", "#78c350","#45bbe0", "#ff9800", "#f7531f","#8892d6","#f06292"]
        }
      });

    },
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard

  }(window.jQuery),

  //initializing
      function($) {
        "use strict";
        $.Dashboard.init()
      }(window.jQuery);
