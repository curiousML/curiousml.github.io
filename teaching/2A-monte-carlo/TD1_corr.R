# EXERCICE 1 : RANDU ----

# Q1.1

# il suffit de montrer que u_i = 6*u_{i-1} - 9*u_{i-2}

# Q1.2
library("latex2exp")

RANDU <- function(x0, n){
  # input :
  #   x0 une valeur deterministe a fixer, n la taille de la liste que l on souhaite avoir
  # output :
  #   u = (u_1, ..., u_n)
  u <- rep(0,n)
  x <- x0
  for(i in (1:n)){
    x <- (65539*x) %% (2**31)
    u[i] <- x / (2**31)
  }
  return(u)
}

x0 <- 2000
n <- 20000
u <- RANDU(x0, n)

# mettons en evidence les 9 hyperplans (sur les 15)
x <- c()
y <- c()
z <- c()
for(i in 3:n){
  if(u[i-1] >= 0.45 && u[i-1] <= 0.55){ # jai choisis un interval plus grand
    x <- c(x, u[i-2])
    z <- c(z, u[i-1])
    y <- c(y, u[i])
  }
}
plot(x, y, xlab=TeX("$u_{i-2}$"), ylab=TeX("$u_{i}$"))

# L'objectif d'un generateur (pseudo-)aleatoire est de generer des v.a.i.i.d
# mais nous voyons ici que les echantillons sont dependants entre eux !
# en sachant que beaucoup d'autres generateurs alea sont programmes a partir 
# du generateur uniforme ... nous voulons a tout prix avoir un generateur uniforme
# performant !


# Q 1.2 bis : mettons en evidence les 6 hyperplans restants
x_bis <- c()
y_bis <- c()
z_bis <- c()
for(i in 3:n){
  if(u[i-2] >= 0.49 && u[i-2] <= 0.51){ # jai choisis un interval plus grand
    z_bis <- c(z_bis, u[i-2])
    x_bis <- c(x_bis, u[i-1])
    y_bis <- c(y_bis, u[i])
  }
}
plot(x_bis, y_bis, xlab=TeX("$u_{i-1}$"), ylab=TeX("$u_{i}$"))



# Q1.3
library("scatterplot3d")

# plot 1
scatterplot3d(x, y, z,
              main="3D Scatter Plot",
              xlab = TeX("$u_i$"),
              ylab = TeX("$u_{i-1}$"),
              zlab = TeX("$u_{i-2}$"), angle = 80, color = "blue")
# plot 2
scatterplot3d(x_bis, y_bis, z_bis,
              main="3D Scatter Plot",
              xlab = TeX("$u_i$"),
              ylab = TeX("$u_{i-1}$"),
              zlab = TeX("$u_{i-2}$"), angle = 80, color = "red")

# Q1.4 (et partiellement Q1.6)

dec2bin <- function(x){
  bits <- paste(as.integer(rev(intToBits(x))), collapse = "")
  return(bits)
}

print("RANDU")
for(i in 1:15){
  print(dec2bin(u[i]*(2**31)))
}
print("runif")
ru <- runif(n)
for(i in 1:15){
  print(dec2bin(ru[i]*(2**31)))
}

# Pour le generateur RANDU nous pouvons visuellement voir la 
# faible periode des bits de poids faibles des x_i.
# La fonction "runif" de R ne possede pas ce phenomene.
# (voir le generateur de Mersenne-Twister)

# EXERCICE 2 : rejet et loi de laplace ----

# Q2.1 corrige lors du TP2

# Q2.2 corrige lors du TP2

