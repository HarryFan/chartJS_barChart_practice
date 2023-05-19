
Chart.js Stacked Bar Chart
==========================

這個專案使用了 [Chart.js](https://www.chartjs.org/) 來創建一個堆疊的條形圖。每個數據集對應一種不同的類型，例如 'Employee', 'Engineer', 'Government', 'Political parties'。每種類型都有自己的顏色和一組對應的數據。

如何運行
----

1.  首先，複製此代碼並將其保存為一個 HTML 文件，例如 `index.html`。
    
2.  打開這個 HTML 文件，您應該可以看到一個包含堆疊條形圖的網頁。
    

結構解釋
----

HTML 文件主要由三部分組成：

1.  HTML 部分：創建一個 `canvas` 元素用於在其中繪製圖表。
    
2.  CSS 部分：設定一些基本的樣式，例如背景顏色和字體。
    
3.  JavaScript 部分：使用 Chart.js 來創建一個堆疊條形圖。
    

以下是 JavaScript 部分的詳細解釋：

*   我們首先從 HTML 中獲取 `canvas` 元素，並獲取其 2D 繪圖上下文。
    
*   然後，我們創建一個新的 Chart.js 圖表。我們為圖表提供一些基本的配置，例如類型（'bar'）、數據和選項。
    
*   我們的數據包含一組標籤和一組數據集。標籤是在 x 軸上顯示的，而數據集則包含我們希望顯示在圖表上的數據。
    
*   每個數據集都有一個標籤、一個背景顏色和一組數據。這些數據將以條形圖的形式顯示在圖表上。
    
*   我們的選項包含一些基本的配置，例如提示框的顯示顏色、x 和 y 軸的配置、是否響應式、是否保持寬高比以及圖例的位置。
    

客製化
---

您可以根據需要修改這個 HTML 文件。例如，您可以更改數據集中的數據，或者添加新的數據集。您也可以更改 CSS 部分以改變網# Let's find a link to the Chart.js documentation for stacked bar charts. search("Chart.js stacked bar chart documentation")

Finished browsing

使用 Chart.js 建立堆疊長條圖的技術文件
========================

以下是如何使用 Chart.js 來創建一個堆疊長條圖的步驟：

1\. 引入 Chart.js
---------------

在您的 HTML 頁面中，您需要引入 Chart.js。您可以使用一個 `script` 標籤來做到這一點，並且將 `src` 屬性設定為 Chart.js 的 CDN 鏈接：

```
<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js'></script>
```

2\. 建立 canvas
-------------

在您的 HTML 中，您需要一個 `canvas` 元素來放置您的圖表。例如：

```
<div class="wrapper">
  <canvas id="myChart4"></canvas></div>
```

在這裡，我們給 `canvas` 一個 id `myChart4`，稍後將在 JavaScript 中使用這個 id 來取得這個元素。

3\. 創建 Chart.js 圖表
------------------

在 JavaScript 中，您需要創建一個新的 Chart.js 圖表。首先，獲取到剛剛創建的 `canvas` 元素：

```
var ctx = document.getElementById("myChart4").getContext('2d');
```

然後，使用 `new Chart()` 來創建一個新的圖表。在這個函數中，您需要提供兩個參數：上面獲取的 `canvas` 元素，以及一個物件，該物件描述了您的圖表的配置。

以下是一個配置堆疊長條圖的例子：

```
var myChart = new Chart(ctx, {  type: 'bar',  data: {    labels: \["<  1", "1 - 2", "3 - 4", "5 - 9", "10 - 14", "15 - 19", "20 - 24", "25 - 29", "> - 29"\],    datasets: \[{      label: 'Employee',      backgroundColor: "#caf270",      data: \[12, 59, 5, 56, 58, 12, 59, 87, 45\],
    }, {      label: 'Engineer',      backgroundColor: "#45c490",      data: \[12, 59, 5, 56, 58, 12, 59, 85, 23\],
    }, {      label: 'Government',      backgroundColor: "#008d93",      data: \[12, 59, 5, 56, 58, 12, 59, 65, 51\],
    }, {      label: 'Political parties',      backgroundColor: "#2e5468",      data: \[12, 59, 5, 56, 58, 12, 59, 12, 74\],
    }\],
  },  options: {    tooltips: {      displayColors: true,      callbacks: {        mode: 'x',
      },
    },    scales: {      xAxes: \[{        stacked: true,        gridLines: {          display: false,
        }
      }\],      yAxes: \[{        stacked: true,        ticks: {          beginAtZero: true,
        },        type: 'linear',
      }\]
    },    responsive: true,    maintainAspectRatio: false,    legend: {      position: 'bottom'
    },
  }
});
```

在這裡，`type: 'bar'` 表示我們創建的是一個長條圖。在 `data` 物件中，`labels` 是一個陣列，包含了 x 軸的標籤。`datasets` 是一個物件的陣列，每一個物件代表一個資料集。每一個資料集有一個 `label`，代表了該資料集的名稱，一個 `backgroundColor`，代表了該資料集的顏色，以及一個 `data`，是一個陣列，包含了該資料集的數據。在 `options` 物件中，我們設定了圖表的一些選項，例如使其可以響應式調整大小，以及設定圖表的圖例的位置。

請注意，這只是一個基本的範例，您可以根據需求調整設定。例如，您可以更改 `type` 為其他的圖表類型，或者在 `data` 中添加更多的資料集，或者在 `options` 中更改其他的選項。

詳細的配置選項，您可以參考[官方文檔](https://www.chartjs.org/docs/latest/charts/bar.html#stacked-bar-chart)【25†source】。

以上就是如何使用 Chart.js 建立堆疊長條圖的技術文件，希望對您有所幫助。