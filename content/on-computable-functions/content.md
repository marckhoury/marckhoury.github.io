What does it mean to be computable? A function is computable if for a given input its output can be calculated by a finite mechanical procedure. But can we pin this idea down with rigorous mathematics? 

In 1928, David Hilbert [@hilbert1902] proposed his famous Entscheidungsproblem, which asks if there is a general procedure for showing that a statement is provable from a given set of axioms. To solve this problem mathematicians first needed to define what it meant to be computable. The first attempt was through primitive recursive functions and was a combined effort by many researchers, including Kurt Gödel, Alonzo Church, Stephen Kleene, Wilhelm Ackermann, John Rosser, and Rózsa Péter.

### Recursive Functions

Primitive recursive functions are defined as a recursive type, starting with a few functions that we assume are computable, called founders, and operators that construct new functions from the founders, called constructors. The founders are the following three functions: 

* **The constant zero function**: a function that always returns zero
* **The successor function**: \\(S(n) = n+1\\)
* **The projection function**: \\(\\text{proj}\_{n}^m\\) is an \\(m\\)-ary function that returns the \\(n\\)th argument

Computability theory wasn't going to get very far if these functions weren't computable. Next, we have two operations for constructing new functions from old: composition and primitive recursion. 

* **Composition**: Given a primitive recursive \\(m\\)-ary function \\(h\\) and \\(m\\) \\(n\\)-ary functions \\(g\_1,\\ldots, g\_m\\), the function \\(f(\\textbf{x}) = h(g\_1(\\textbf{x}),\\ldots, g\_m(\\textbf{x}))\\) is primitive recursive.
* **Primitive Recursion**:  Given primitive recursive functions \\(g,h\\) the function 
\begin{aligned}
f(\textbf{x},0) &= g(\textbf{x})\\
f(\textbf{x}, y+1) &= h(\textbf{x},y,f(\textbf{x},y))
\end{aligned} 
is primitive recursive.

The set of primitive recursive functions is the set of functions constructed from our three initial functions and closed under composition and primitive recursion. Many familiar functions are primitive recursive: addition, multiplication, exponentiation, primes, max, min, and the logarithm function all fit the bill.  

So are we done? Is every computable function also primitive recursive? Sadly, no: the Ackermann function would be proven in 1928 to be a counterexample.

$$
A(m,n) =
  \begin{cases}
   n+1 & \text{if } m = 0 \\
   A(m-1,1)  & \text{if } m > 0 \text{ and } n = 0\\
   A(m-1,A(m,n-1)) & \text{if } m > 0 \text{ and } n > 0
  \end{cases}
$$

The Ackermann function is a total (defined for all inputs) function that is clearly computable but not primitive recursive. Indeed, in 1928 Ackermann [@ackermann1928] showed that his function bounds every primitive recursive function: it grows too fast to be primitive recursive.

Something was clearly wrong, but early computability theorists didn't want to abandon primitive recursive functions entirely. What came next was a rather surprising idea at the time: perhaps computable functions need not be total! This was the key that unlocked computability theory: focusing on partial functions, those that may not be defined on all possible inputs.

The reason for focusing on partial functions is to allow an unbounded search operator. That is, we want to be able to search for the least input value that satisfies a condition and simply be undefined if no such input value exists. This operation is captured by Kleene's \\(\\mu\\)-operator.

* \\(\\mu\\)-**recursion**: \\(f(x) = (\\mu y)(g(x,y) = 0)\\) returns the least \\(y\\) such that \\(g(x,y) = 0\\) and is undefined if no such \\(y\\) exists. The function \\(g(x,y')\\) must be defined for all \\(y' < y\\).

Taking the closure of the \\(\\mu\\)-operator with all primitive recursive functions gives a class of \\(\\mu\\)-recursive functions. In 1943, Kleene [@kleene1943] used his \\(\\mu\\)-operator to provide an alternative, but equivalent, definition of general recursive functions. The original definition was given by Gödel in 1934 [@godel1934], based on an observation by Jacques Herbrand. It would later be shown that \\(\\mu\\)-recursive functions are the exact same class of functions defined by two competing approaches [@kleene1952].

### \\(\\lambda\\)-Calculus

Simultaneously, from 1931-1934, Church and Kleene were developing \\(\\lambda\\)-calculus as an approach to computable functions. The syntax of \\(\\lambda\\)-calculus defines certain expressions as valid statements, which are called \\(\\lambda\\)-terms. A \\(\\lambda\\)-term is built up from a collection of variables and two operators: abstraction and application. 

Let's start with a collection of variables \\(x,y,z,\\ldots\\) and suppose \\(M, N\\) are valid \\(\\lambda\\)-terms. The abstraction operator creates the term \\(\\lambda x. M\\), which is a function taking an argument \\(x\\) and returning \\(M\\) with each occurrence of \\(x\\) replaced with the argument. The application operator creates the term \\(M N\\), which represents the application of a function \\(M\\) on input \\(N\\).

The \\(\\lambda\\)-term \\(\\lambda x.M\\) represents a function \\(f(x) = M\\) and - like recursive functions - many familiar functions are \\(\\lambda\\)-definable. The \\(\\alpha\\)-conversion and \\(\\beta\\)-reduction are classic examples of *reductions*, which describe how \\(\\lambda\\)-terms are evaluated. An \\(\\alpha\\)-conversion captures the notion that the name of an argument is usually immaterial. For instance \\(\\lambda x.x\\) and \\(\\lambda y.y\\) both represent the identity function and are \\(\\alpha\\)-equivalent. A \\(\\beta\\)-reduction applies a function to its arguments. Take, as an example, the \\(\\lambda\\)-term \\((\\lambda x.x)y\\), which represents the identity function \\((\\lambda x.x)\\) applied to the input \\(y\\). Substituting the argument \\(y\\) for the parameter \\(x\\), the result of the function is \\(y\\). So we say \\((\\lambda x.x)y\\) \\(\\beta\\)-reduces to \\(y\\).

In 1934 Church proposed that the term "effectively calculable" be identified with \\(\\lambda\\)-definable. While Church's formalization of computability would later be shown to be equivalent to Turing's, Gödel was dissatisfied with Church's work. In fairness, Gödel also was dissatisfied with his own work! Church would go on to advocate that "effectively calculable" should be identified with general recursive functions (which Gödel still rejected). In 1936 Church [@church1936] published his work proving that that the Entscheidungsproblem was undecidable: there is no general procedure for determining if a statement is provable from a given set of axioms.

### Turing Machines

Meanwhile, after hearing about Hilbert's Entscheidungsproblem, a 22 year old Cambridge student named Alan Turing began working on his own solution to the problem. Turing was unaware of Church's work at the time, so his approach wasn't influenced by \\(\\lambda\\)-expressions (this wasn't the first time Turing failed to perform a literature review). Instead, he envisioned an idealized human agent performing a computation, which he called a "computer". To avoid confusion with the modern definition of computer, we'll adopt the terminology of Robin Gandy and Wilfried Sieg and use the term "computor" to refer to an idealized human agent. The computor had infinite available memory called a tape, essentially an infinite strip of paper, that was divided into squares. The computor could read and write to a square, as well as move from one square to another.

Turing put several conditions on the computation that the computor could perform. The computor could only have finitely many states (of mind) and the tape could only hold symbols from a finite alphabet. Only a finite number of squares could be observed at a time and the computor could only move to a new square that was at most some finite distance away from an observed square. He also required that any operation must depend only on the current state and the observed symbols, and that there was at most one operation that could be performed per action (his machines were deterministic). 

From this, Turing would go on to define his automatic machines - which would later come to be known as Turing machines - and show the equivalence of the two formalizations. He'd then show that "effectively calculable" implied computable by his idealized human agent, which in turn implied computable by such a machine. Turing then went on to show that the Entscheidungsproblem was undecidable. Shortly before publishing his work, he learned that Church had already shown that the Entscheidungsproblem was undecidable using \\(\\lambda\\)-calculus. Turing quickly submitted his work in 1936 [@turing1936] - six months after Church - along with a proof demonstrating the equivalence between his machines and \\(\\lambda\\)-calculus. 

After reading Turing's seminal paper, Gödel was finally convinced that the correct notion of computability had been determined. It would later be shown that all three formalizations - Turing machines, \\(\\mu\\)-recursion, and \\(\\lambda\\)-calculus - actually define the same class of functions. That these three approaches all yielded the same class of functions suggested that mathematicians had captured the correct notion of computation, and supported what would come to be known as the Church-Turing Thesis.

Three years later, in 1939, Turing completed his Ph.D. at Princeton under the supervision of Church. In his thesis he'd state the following [@turing1939]: "We shall use the expression 'computable function' to mean a function calculable by a machine, and let 'effectively calculable' refer to the intuitive idea without particular identification with any one of these definitions."

> **Church-Turing Thesis**: Every effectively calculable function is a computable function.

Church intended for his original thesis to be taken as a definition of what is computable. Likewise, even though he never stated it, Turing had the same intention. In fact, the term "Church's Thesis" was coined by Kleene many years after Church had published his work. These days, many people take the Church-Turing Thesis as a definition of what is computable; less formally stating that a function is computable if and only if it can be computed by a Turing machine. 

It's important to stress that the Church-Turing Thesis is not a definition as many believe. It does not refer to any particular formalization that we've discussed and is not a statement that can be formally proven. It is a statement about the nature of computation. Everything that is "effectively calculable", in the vague and intuitive sense, is a computable function.
