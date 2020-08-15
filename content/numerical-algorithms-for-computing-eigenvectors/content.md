The eigenvalues and eigenvectors of a matrix are essential in many applications across the sciences. Despite their utility, students often leave their linear algebra courses with very little intuition for eigenvectors. In this post we describe several surprisingly simple algorithms for computing the eigenvalues and eigenvectors of a matrix, while attempting to convey as much geometric intuition as possible. 

Let \\(A\\) be a symmetric positive definite matrix. Since \\(A\\) is symmetric all of the eigenvalues of \\(A\\) are real and \\(A\\) has a full set of orthogonal eigenvectors. Let \\(\\lambda\_1 \\geq \\lambda\_2 \\geq \\ldots \\geq \\lambda\_n > 0\\) denote the eigenvalues of \\(A\\) and let \\(u\_{1}, \\ldots, u\_n\\) denote their corresponding eigenvectors. The fact that \\(A\\) is positive definite means that \\(\\lambda_i > 0\\) for all \\(i\\). This condition isn't strictly necessary for the algorithms described below; I'm assuming it so that I can refer to the largest eigenvalue as opposed to the largest in magnitude eigenvalue.

All of my intuition for positive definite matrices comes from the geometry of the quadratic form \\(x^{\\top}Ax\\). Figure 1 plots \\(x^{\\top}Ax\\) in \\(\\mathbb{R}^3\\) for several \\(2 \times 2\\) matrices. When \\(A\\) is positive definite, the quadratic form \\(x^{\\top}Ax\\) is shaped like a bowl. More rigorously it has positive curvature in every direction and the curvature at the origin in the direction of each eigenvector is proportional to the eigenvalue of that eigenvector. In \\(\\mathbb{R}^3\\), the two eigenvectors give the directions of the maximum and minimum curvature at the origin. These are also known as principal directions in differential geometry, and the curvatures in these directions are known as principal curvatures. I often shorten this intuition by simply stating that positive definite matrices *are* bowls, because this is always the picture I have in my head when discussing them.

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure1v2.png" width="750">
  <figcaption>
	<b>Figure 1:</b> The geometry of the quadratic form \\(x^{\\top}Ax\\) for, from left to right, a positive definite matrix, a positive semi-definite matrix, an indefinite matrix, and a negative definite matrix.  When \\(A\\) is positive definite it has positive curvature in every direction and is shaped like a bowl. The curvature at the origin in the direction of an eigenvector is proportional to the eigenvalue. A positive semi-definite matrix may have one or more eigenvalues equal to 0. This creates a flat (zero curvature) subspace of dimension equal to the number of eigenvalues with value equal to 0. An indefinite matrix has both positive and negative eigenvalues, and so has some directions with positive curvature and some with negative curvature, creating a saddle. A negative definite matrix has all negative eigenvalues and so the curvature in every direction is negative at every point.
  </figcaption>
</figure>

Now suppose we wanted to compute a single eigenvector of \\(A\\). This problem comes up more often than you'd think and it's a crime that undergraduate linear algebra courses don't often make this clear. The first algorithm that one generally learns, and the only algorithm in this post that I knew as an undergraduate, is an incredibly simple algorithm called Power Iteration. Starting from a random unit vector \\(v\\) we simply compute \\(A^{t}v\\) iteratively. For sufficiently large \\(t\\), \\(A^{t}v\\) converges to the eigenvector corresponding to the largest eigenvalue of \\(A\\), hereafter referred to as the "top eigenvector".

<pre><code>
def power_iteration(A, max_iter):
  v = np.random.randn(A.shape[0])
  v /= np.linalg.norm(v) #generate a uniformly random unit vector
  for t in range(max_iter):
    v = np.dot(A, v) #compute Av
    v /= np.linalg.norm(v)
  return v
</code></pre>

To see why Power Iteration converges to the top eigenvector of \\(A\\) it helps to write \\(v\\) in the eigenbasis of \\(A\\) as \\(v = \\sum\_{i=1}^n\\beta\_{i}u\_{i}\\) for some coefficients \\(\\beta\_i\\). Then we have that

\begin{aligned}
A^{t}v &= A^{t}(\sum_{i= 1}^{n}\beta_{i}u_{i})\\
       &= \sum_{i=1}^{n}\beta_{i}A^{t}u_{i}\\
       &= \sum_{i=1}^{n}\beta_{i}\lambda_{i}^{t}u_{i}\\
       &= \lambda_{1}^t \sum_{i=1}^{n}\beta_{i}\left(\frac{\lambda_{i}}{\lambda_{1}}\right)^t u_{i}\\
       &= \lambda_{1}^{t} \left( \beta_1 u_1 + \sum_{i=2}^{n}\beta_{i}\left(\frac{\lambda_{i}}{\lambda_{1}}\right)^t u_{i} \right).
\end{aligned}

Since \\(\\lambda_1\\) is the largest eigenvalue, the fractions \\(\\left(\\frac{\\lambda_i}{\\lambda_1}\\right)^t\\) go to 0 as \\(t \\rightarrow \\infty\\), for all \\( i \\neq 1\\). Thus the only component of \\(A^{t}v\\) that has any weight is that of \\(u_1\\). How quickly each of those terms goes to 0 depends on the ratio \\(\\frac{\\lambda\_{2}}{\\lambda\_{1}}\\). If this term is close to 1 then it may take many iterations to disambiguate between the top two (or more) eigenvectors. We say that the Power Iteration algorithm converges at a rate of \\(O\\left(\\left(\\frac{\\lambda\_{2}}{\\lambda\_{1}}\\right)^t\\right)\\), which for some unfortunate historical reason is referred to as "linear convergence".

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure2.gif" width="550">
	<figcaption><b>Figure 2:</b> An illustration of the Power Iteration algorithm. The \\(i\\)th bar represents the component of the current iterate on the \\(i\\)th eigenvector, in order of decreasing eigenvalue. Notice that the components corresponding to the smallest eigenvalues decrease most rapidly, whereas the components on the largest eigenvalues take longer to converge. This animation represents 50 iterations of Power Iteration.</figcaption>
</figure>

Power Iteration will give us an estimate of the top eigenvector \\(u\_1\\), but what about the other extreme? What if instead we wanted to compute \\(u\_n\\), the eigenvector corresponding to the smallest eigenvalue? It turns out there is a simple modification to the standard Power Iteration algorithm that computes \\(u\_n\\). Instead of multiplying by \\(A\\) at each iteration, multiply by \\(A^{-1}\\). This works because the eigenvalues of \\(A^{-1}\\) are \\(\\frac{1}{\\lambda\_i}\\), and thus the smallest eigenvalue of \\(A\\), \\(\\lambda\_n\\), corresponds to the largest eigenvalue of \\(A^{-1}\\),  \\(\\frac{1}{\\lambda\_{n}}\\). Furthermore the eigenvectors of \\(A^{-1}\\) are unchanged. This slight modification is called Inverse Iteration, and it exhibits the same convergence as Power Iteration, by the same analysis.

<pre><code class="python">
def inverse_iteration(A, max_iter):
  v = np.random.randn(A.shape[0])
  v /= np.linalg.norm(v) #generate a uniformly random unit vector
  lu, piv = scipy.linalg.lu_factor(A) # compute LU factorization of A
  for t in range(max_iter):
    v = scipy.linalg.lu_solve((lu, piv), v) #compute A^(-1)v
    v /= np.linalg.norm(v)
  return v
</code></pre>

Note that we don't actually compute \\(A^{-1}\\) explicitly. Instead we compute an LU factorization of \\(A\\) and solve the system \\(LUv\_{t+1} = v\_{t}\\). The matrix that we're multiplying by does not change at each iteration, so we can compute the LU factorization once and quickly solve a linear system to compute \\(A^{-1}v\\) at each iteration.

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure3.gif" width="550">
	<figcaption><b>Figure 3:</b> The Inverse Iteration algorithm. Notice that in this case the algorithm converges to the eigenvector corresponding to the smallest eigenvalue. </figcaption>
</figure>

Power Iteration and Inverse Iteration find the eigenvectors at the extremes of the spectrum of \\(A\\), but sometimes we may want to compute a specific eigenvector corresponding to a specific eigenvalue. Suppose that we have an estimate \\(\\mu\\) of an eigenvalue. We can find the eigenvector corresponding to the eigenvalue of \\(A\\) closest to \\(\\mu\\) by a simple modification to Inverse Iteration. Instead of multiplying by \\(A^{-1}\\) at each iteration, multiply by \\((\\mu I\_{n} - A)^{-1}\\) where \\(I\_{n}\\) is the identity matrix. The eigenvalues of \\((\\mu I\_{n} - A)^{-1}\\) are \\(\\frac{1}{\\mu - \\lambda\_{i}}\\). Thus the largest eigenvalue of \\((\\mu I\_{n} - A)^{-1}\\) corresponds to the eigenvalue of \\(A\\) whose value is closest to \\(\\mu\\). By the same analysis as Power Iteration, Shifted Inverse Iteration also exhibits linear convergence. However the better the estimate \\(\\mu\\) the larger \\(\\frac{1}{\\mu - \\lambda\_{i}}\\) and, consequently, the faster the convergence.

<pre><code class="python">
def shifted_inverse_iteration(A, mu, max_iter):
  I = np.identity(A.shape[0])
  v = np.random.randn(A.shape[0])
  v /= np.linalg.norm(v) #generate a uniformly random unit vector
  lu, piv = scipy.linalg.lu_factor(mu*I - A) # compute LU factorization of (mu*I - A)
  for t in range(max_iter):
    v = scipy.linalg.lu_solve((lu, piv), v) #compute (mu*I - A)^(-1)v
    v /= np.linalg.norm(v)
  return v
</code></pre>

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure4.gif" width="550">
	<figcaption><b>Figure 4:</b> The Shifted Inverse Iteration algorithm. In this case we converge to the eigenvector corresponding to the eigenvalue nearest \\(\\mu\\). </figcaption>
</figure>

Shifted Inverse Iteration converges quickly if a good estimate of the target eigenvalue is available. However if \\(\mu\\) is a poor approximation of the desired eigenvalue, Shifted Inverse Iteration may take a long time to converge. In fact all of the algorithms we've presented so far have exactly the same convergence rate; they all converge linearly. If instead we could improve on the eigenvalue estimate at each iteration we could potentially develop an algorithm with a faster convergence rate. This is the main idea behind Rayleigh Quotient Iteration.

The Rayleigh quotient is defined as
\\[
\\lambda\_{R}(v) = \\frac{v^{\\top} Av }{ v^{\\top}v}
\\]
for any vector \\(v\\). There are many different ways in which we can understand the Rayleigh quotient. Some intuition that is often given is that the Rayleigh quotient is the scalar value that behaves most like an "eigenvalue" for \\(v\\), even though \\(v\\) may not be an eigenvector. What is meant is that the Rayleigh quotient is the minimum to the optimization problem
\\[
\\min\_{\\lambda \\in \\mathbb{R}} \\|Av - \\lambda v\\|^2.
\\]
This intuition is hardly satisfying.

Let's return to the geometry of the quadratic forms \\(x^{\\top}Ax\\) and \\(x^{\\top}x\\) which comprise the Rayleigh quotient, drawn in orange and blue respectively in Figure 5. Without loss of generality we can assume that \\(A\\) is a diagonal matrix. (This is without loss of generality because we're merely rotating the surface so that the eigenvectors align with the \\(x\\) and \\(y\\) axes, which does not affect the geometry of the surface. This is a common trick in the numerical algorithms literature.) In this coordinate system, the quadratic form \\(x^{\\top}Ax = \\lambda\_1x\_1^2 + \\lambda\_2 x\_2^2\\), where \\(\\lambda\_1\\) and \\(\\lambda\_2\\) are the diagonal entries, and thus the eigenvalues, of \\(A\\).

Consider any vector \\(v\\) and let \\(h = \\operatorname{span}\\{v, (0,0,1)\\}\\) be the plane spanned by \\(v\\) and the vector \\((0,0,1)\\). The intersection of \\(h\\) with the quadratic forms \\(x^{\\top}Ax\\) and \\(x^{\\top}x\\) is comprised of two parabolas, also shown in Figure 5. (This is a common trick in the geometric algorithms literature.) If \\(v\\) is aligned with the \\(x\\)-axis, then, within the coordinate system defined by \\(h\\), \\(x^{\\top}Ax\\) can be parameterized by \\(y = \\lambda\_1 x^2\\) and \\(x^{\\top}x\\) can be parameterized by \\(y = x^2\\). (Note that here \\(y\\) and \\(x\\) refer to local coordinates within \\(h\\) and are distinct from the vector \\(x\\) used in \\(x^{\\top}Ax\\).) Similarly if \\(v\\) is aligned with the \\(y\\)-axis, then \\(x^{\\top}Ax\\) can be parameterized by \\(y = \\lambda\_2 x^2\\).  (If \\(v\\) is any other vector then \\(x^{\\top}Ax\\) can be parameterized by \\(y = \\kappa x^2\\) for some \\(\\kappa\\) dependent upon \\(v\\).)  The Rayleigh quotient at \\(v\\) is \\(\\lambda\_{R}(v) = \\frac{\\lambda\_1 x^2 }{ x^2} = \\lambda\_1\\). The curvature of the parabola \\(y = \\lambda\_1 x^2\\) at the origin is \\(2\\lambda\_1\\). Thus the Rayleigh quotient is proportional to the the curvature of \\(x^{\\top}Ax\\) in the direction \\(v\\)!

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure5.png" width="750">
	<figcaption><b>Figure 5:</b> The quadratic form \\(x^{\\top}Ax\\) is shown in orange and \\(x^{\\top} x\\) is shown in blue. Intersecting both surfaces with a plane \\(h\\) gives two parabola. Within the plane \\(h\\) we can define a local coordinate system and parameterize both parabola as \\(\\kappa x^2\\) and \\(x^2\\). The Rayleigh quotient is equal to the ratio of the heights of the parabolas at any point, which is always equal to \\(\\kappa\\). </figcaption>
</figure>

From this intuition it is clear that the value of the Rayleigh quotient is identical along any ray starting at, but not including, the origin. The length of \\(v\\) corresponds to the value of \\(x\\) in the coordinate system defined by \\(h\\), which does not affect the Rayleigh quotient. We can also see this algebraically, by choosing a unit vector \\(v\\) and parameterizing a ray in the direction \\(v\\) as \\(\\alpha v\\) for \\(\\alpha \\in \\mathbb{R}\\) and \\(\\alpha > 0\\). Then we have that

\begin{aligned}
\lambda_{R}(\alpha v) &= \frac{(\alpha v^{\top})A(\alpha v)} {\alpha^2 v^{\top}v}\\
                      &= \frac{v^{\top}Av} {v^{\top}v}\\
                      &= v^{\top}Av.
\end{aligned}

Thus it is sufficient to consider the values of the Rayleigh quotient on the unit sphere.

For a unit vector \\(v\\) the value of the Rayleigh quotient can be written in the eigenbasis as
\begin{aligned}
v^{\top}Av = \sum_{i=1}^{n} \lambda_{i}\langle v, u_i\rangle^2
\end{aligned}
where \\(\\sum\_{i=1}^{n} \\langle v, u_i\\rangle^2 = 1\\). Thus the Rayleigh quotient is a convex combination of the eigenvalues of \\(A\\) and so its value is bounded by the minimum and maximum eigenvalues \\( \\lambda\_{n} \\leq \\lambda\_{R}(v) \\leq \\lambda\_{1}\\) for all \\(v\\). This fact is also easily seen from the geometric picture above, as the curvature at the origin is bounded by twice the minimum and maximum eigenvalues. It can be readily seen by either direct calculation or by the coefficients of the convex combination, that if \\(v\\) is an eigenvector, then \\(\\lambda\_{R}(v)\\) is the corresponding eigenvalue of \\(v\\).

Recall that a critical point of a function is a point where the derivative is equal to 0. It should come as no surprise that the eigenvalues are the critical values of the Rayleigh quotient and the eigenvectors are the critical points. What is less obvious is the special geometric structure of the critical points.

The gradient of the Rayleigh quotient is \\(\\frac{2}{v^{\\top}v}(Av - \\lambda\_{R}(v)v)\\), from which it is easy to see that every eigenvector is a critical point of \\(\\lambda\_{R}\\). The type of critical point is determined by the Hessian matrix, which at the critical point \\(u\_i\\) is \\(2(A - \\lambda\_{i}I)\\). The eigenvalues of the Hessian are \\(\\lambda\_j - \\lambda\_i\\) for \\(j \\in [1,n]\\). Assuming for a moment that the eigenvalues are all distinct, the matrix \\(2(A - \\lambda\_{i}I)\\) has \\(i-1\\) eigenvectors that are positive, one eigenvalue that is 0, and \\(n - i\\) eigenvalues that are negative. The 0 eigenvalue represents the fact that the value of the Rayleigh quotient is unchanged along the ray \\(\\alpha u\_i\\). The other eigenvalues represent the fact that at \\(u\_i\\), along the unit sphere, there are \\(i-1\\) directions in which we can walk to increase the value of the Rayleigh quotient, and \\(n-i\\) directions that decrease the Rayleigh quotient. Thus each eigenvector gives rise to a different type of saddle, and there are exactly two critical points of each type on the unit sphere.

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure6.png" style="width: 400px; margin:auto;">
	<figcaption><b>Figure 6:</b> Contours of the Rayleigh quotient on the unit sphere and the gradient of the Rayleigh quotient at each point. We clearly see one minimum in blue corresponding to the minimum eigenvalue, one saddle point, and one maximum in bright yellow corresponding to the maximum eigenvalue.  </figcaption>
</figure>

Finally we come to the crown jewel of the algorithms in this post. The Rayleigh Quotient Iteration algorithm simply updates the estimate \\(\\mu\\) at each iteration with the Rayleigh quotient. Other than this slight modification, the algorithm is exactly like Shifted Inverse iteration.

<pre><code class="python">
def rayleigh_quotient_iteration(A, max_iter):
  I = np.identity(A.shape[0])
  v = np.random.randn(A.shape[0])
  v /= np.linalg.norm(v) #generate a uniformly random unit vector
  mu = np.dot(v, np.dot(A, v))
  for t in range(max_iter):
    v = np.linalg.solve(mu * I - A, v) #compute (mu*I - A)^(-1)v
    v /= np.linalg.norm(v)
    mu = np.dot(v, np.dot(A, v)) #compute Rayleigh quotient
  return (v, mu)
</code></pre>

This slight modification drastically improves the convergence rate. Unlike the other algorithms in this post which converge linearly, Rayleigh quotient iteration exhibits local cubic convergence! This means that, assuming \\(\\| v\_{t} - u\_i\\| \\leq \\epsilon\\) for some \\(u\_i\\), on the next iteration we will have that \\(\\| v\_{t+1} - u\_{i} \\| \\leq \\epsilon^3\\). In practice this means that you should expect triple the number of correct digits at each iteration. It's hard to understate how crazy fast cubic convergence is, and, to the best of the author's knowledge, algorithms that exhibit cubic convergence are rare in the numerical algorithms literature.

<figure align="middle">
	<img src="numerical-algorithms-for-computing-eigenvectors/Figure7v2.gif" width="550">
	<figcaption><b>Figure 7:</b> The Rayleigh Quotient Iteration algorithm. After only 6 iterations the eigenvalue estimate \\(\\mu\_t\\) is so accurate that the resulting matrix \\((\\mu_t I_{n} - A)\\) is singular up-to machine precision and we can no longer solve the system for an inverse. Note that every other figure in this post shows 50 iterations.</figcaption>
</figure>

Intuitively, the reason that Rayleigh Quotient Iteration exhibits cubic convergence is because, while the Shifted Inverse Iteration step converges linearly, the Rayleigh quotient is a quadratically good estimate of an eigenvalue near an eigenvector. To see this consider the Taylor series expansion of \\(\\lambda\_{R}\\) near an eigenvector \\(u\_i\\).

\begin{aligned}
\lambda_{R}(v) &= \lambda_{R}(u_i) + (v - u_{i})^{\top} \nabla \lambda_{R}(u_i) + O(||v - u_i||^2)\\
               &= \lambda_{R}(u_i) + O(||v - u_i||^2)\\
\lambda_{R}(v) - \lambda_{R}(u_i) &= O(||v - u_i||^2)                
\end{aligned}

The second step follows from the fact that \\(u\_i\\) is a critical point of \\(\\lambda\_{R}\\) and so \\(\\nabla \\lambda\_{R}(u\_i) = 0\\).

While Rayleigh Quotient Iteration exhibits very fast convergence, it's not without its drawbacks. First, notice that the system \\((\\mu\_{t}I - A)^{-1}\\) changes at each iteration. Thus we cannot precompute a factorization of this matrix and quickly solve the system using forward and backward substitution at each iteration, like we did in the Shifted Inverse Iteration algorithm. We need to solve a different linear system at each iteration, which is much more expensive. Second, Rayleigh Quotient Iteration gives no control over to which eigenvector it converges. The eigenvector it converges to depends on which basin of attraction the initial random vector \\(v\_{0}\\) falls into. Thus cubic convergence comes at a steep cost. This balance between an improved convergence rate and solving a different linear system at each iteration feels like mathematical poetic justice. The price to pay for cubic convergence is steep. 

