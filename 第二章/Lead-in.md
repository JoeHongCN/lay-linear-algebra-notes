我们在这一章将会学到两个概念来帮助我们解决一个如此庞大的方程组（~2M）  
1、*partitioned matrices*（分块矩阵）。因为一个典型的 CFD 系统会有一个“sparse(稀疏的)”系数矩阵，里面大部分项都是 0，所以如果我们做正确的分组，就可以让这个矩阵变成一个有很多 0 矩阵的分块矩阵。我们将会在 [2.4](2.4%20Partitioned%20Matrices.md) 中学到它。  
2、*matrix factorizations*（矩阵分解）。为了进一步简化分块矩阵，波音的 CFD 软件用了一个被称为 *LU factorizations* 的分解方法来分解系数矩阵。我们将会在 [2.5 Matrix Factorizations](2.5%20Matrix%20Factorizations.md) 及之后的篇幅中讨论这件事。  
3、当一个模型被渲染到计算机屏幕上时，工程师就可以改变它的大小，对它进行放缩，旋转。这些操作都可以被正确的矩阵乘法实现。我们将会在 2.7节 阐释这背后的基本思想。

最后：  
当我们能够对**矩阵**进行**代数运算**时，我们**分析和求解**方程的能力将大大增强。此外，本章中的定义和定理为处理涉及两个或多个矩阵的众多线性代数应用提供了一些基本工具。对于 $`n\times n`$ 矩阵，[2.3 Characterization of Invertible Matrices](2.3%20Characterization%20of%20Invertible%20Matrices.md)中的[可逆矩阵定理](../可逆矩阵定理-展开表.md)将前文讨论的大部分概念联系在了一起。[2.4 Partitioned Matrices](2.4%20Partitioned%20Matrices.md)和[2.5 Matrix Factorizations](2.5%20Matrix%20Factorizations.md)探讨了分块矩阵和矩阵分解，它们出现在大多数现代线性代数应用中。2.6节和2.7节描述了矩阵代数的两个有趣应用：在经济学和在计算机图形学中的应用。2.8节和2.9节为读者提供了关于**子空间**的足够信息，使他们能够直接进入第5、6和7章，而无需学习第4章。如果你计划在进入第5章之前先学习第4章，你可能会想略过这两节。