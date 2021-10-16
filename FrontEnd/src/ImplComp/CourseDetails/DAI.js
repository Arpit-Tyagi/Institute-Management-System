import React from 'react'
import './CourseDetails.css'; 
import { useHistory } from 'react-router-dom';

function DAI (){

    const history = useHistory();
    
	const HandleClick= () =>{
        
        history.push("/Form");

    }


        return(

            <div className='DAI'>
           <div class="cdheader">

           <h1>Diploma in Artificial Intelligence</h1>
           <h4> Duration - 6 Months  </h4>
           </div>

           <div className="cdcontainer">
           <div className='row'>
           <div className='col-md-6 col-lg-4'>
           <div className="dealwrapper purple">
        
            <div class="list-group">
                <a href="#" class="list-group-item">
                    <h4 class="cdheading"> Fundamental of Artificial Intelligence </h4>
                    <p class="text">  Introduction to AI, Evolution & Revolution of AI, Ethics of AI, Structure of AI, Real world Implications, Intelligent Agents, Uninformed Search, Constraint Satisfaction Search, Combinatorial Optimization Problems, Heuristic & Meta-heuristics, Genetic Algorithms for Search, Game Trees, Propositional and Predicate Logic, Inference and Resolution for Problem Solving, Rules and Expert Systems, Artificial Life, Emergent Behavior, Genetic Algorithms</p>
                </a>
                
                <a href="#" class="list-group-item active">
                    <h4 class="cdheading"> Mathematics for AI  </h4>
                    <p class="text">• Matrices definition, addition, transpose, scalar multiplication,hadamard product, functions, linear transformation, determinant, identity matrix, invertible matrix and inverse, rank, trace, popularity of matrices-symmetric, diagonal, orthogonal, ortho-normal, positive definite matrix • Function scalar derivative, definition, intuition, common rules of differentiation, chain rule,
• Vector and matrix calculus, how to find derivative of scalar-valued, vector-valued function with respect to scalar</p>
                </a>
                
                <a href="#" class="list-group-item">
                    <h4 class="cdheading"> Advanced Programming using Python </h4>
                    <p class="text"> Python Programming: Introduction to Python, Basic Syntax, Data Types, Variables, Operators, Input/output, Flow of Control (Modules, Branching), If, If-else, Nested if-else, Looping, For, While, Nested loops, Control Structure, Break, Continue, Pass, Strings and Tuples, Accessing Strings, Basic Operations, String slices, Working with Lists, Introduction, Accessing list, Operations, Function and Methods, Files, Modules, Dictionaries, Functions
Advanced Python: Object Oriented, OOPs concept, Class and object, Decorators, Attributes, Inheritance, Overloading, Operations Exception.</p>
                </a>
            </div>
        </div>​
    </div>
    
    <div className='col-md-6 col-lg-4'>
        <div className="dealwrapper red">
        
            <div class="list-group">
                <a href="#" class="list-group-item">
                    <h4 class="cdheading">Data Analytics   </h4>
                    <p class="text">Introduction to Business Analytics using some case studies, Making Right Business Decisions based on data, Descriptive Statistics and its measures, Probability theory, Probability Distributions (Continuous and discrete- Normal, Binomial and Poisson distribution) and Data, Sampling and Estimation, Statistical Interfaces, Predictive modelling and analysis, Bayes’ Theorem, Central Limit theorem, Data Exploration & preparation. </p>
                </a>
                
                <a href="#" class="list-group-item active">
                    <h4 class="cdheading">Deep Neural Networks</h4>
                    <p class="text">Basics of Reinforcement Learning
Markov Decision Processes: Gridworld, Choosing rewards, Markov Property, Markov Decision Process, Future Rewards, Value Functions, The Bellman Equation, Bellman Example, Optimal Policy & Optimal Value Function
Dynamic Programming: Iterative Policy Evaluation, Designing your RL program, Code – Gridworld, Iterative Policy Evaluation, Windy Gridworld, Iterative Policy for Windy Gridworld, Policy iteration, Value iteration</p>
                </a>
                
                <a href="#" class="list-group-item">
                    <h4 class="cdheading">Practical Machine Learning   </h4>
                    <p class="text"> Introduction to Feature engineering and Data Pre-processing: Data Preparation, Feature creation, Data cleaning & transformation, Data Validation & Modelling, Feature selection Techniques, Dimensionality reduction, Recommendation Systems and anomaly detection, PCA 

ML Algorithms: Decision Trees, Oblique trees, Random forest, Bayesian analysis and Naïve bayes classifier, KNN,
 Gradient boosting, Ensemble methods, Bagging & Boosting, Association rules learning, Apriori and
  FP growth algorithms, Linear and Nonlinear classification, Regression Techniques, Clustering, K-means. The course will also introduce a range of model based and algorithmic machine 
    learning methods.</p>
                </a>
            </div>
        </div>​
    </div>
    
    <div className='col-md-6 col-lg-4'>

        <div className="dealwrapper blue">
        
            <div class="list-group">
                <a href="#" class="list-group-item">
                    <h4 class="cdheading"> Natural Language Processing & Computer Vision  </h4>
                    <p class="text">Natural Language Processing: Understanding Language, NLP Overview, Introduction to Language Computing, Language in Cognitive Science, Definitions of language, Language and symbolic systems: Artificial language (Logical language / programming language) vs. Natural Language, Language Analysis and Computational Linguistics, Semantics, Discourse, Pragmatics, Lexicology.</p>
                </a>
                
                <a href="#" class="list-group-item active">
                    <h4 class="cdheading"> AI Trends & Computing Platforms </h4>
                    <p class="text">Apache Spark

·   Apache Spark APIs for large-scale data processing: Basics of Spark, Deploying to a Cluster Spark Streaming, Spark ML lib and ML APIs, Spark Data Frames/Spark SQL, Integration of Spark and Kafka, Setting up Kafka Producer and Consumer, Kafka Connect API, Connecting DB’s with Spark,

·        AI Future Trends



DevOps for AI/ML

·         Introduction to containers: Introduction to DevOps, Introduction to Containers, Advantages of using container based applications, Installing docker</p>
                </a>
                
                <a href="#" class="list-group-item">
						<h4 class="cdheading">Effective Communication </h4>
						<p class="text"> The Art of Communication, Personality Development, English Grammar, Correct Usage of English, Common Mistakes in English Communication, Listening Skills, Reading Skills, Writing Skills, Public Speaking, Presentation Skills, Group Discussions, Personal Interviews, Fundamentals of Communication, The Art of Communication, Personality Development, English Grammar, Correct Usage of English, Common Mistakes in English Communication, Listening Skills, Reading Skills, Writing Skills, Presentation Skills, Group Discussions, Interpersonal Skills, Personal Interviews</p>
					</a>
            </div>
        </div>​
    
    </div>
</div>
<div id = "cdbtn">

	<button type="submit" class="cdregisterbtn"  onClick={HandleClick}>Register Now</button>
	 
	</div>
​
</div>

         </div>

        );
    }

export default DAI;