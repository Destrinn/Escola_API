create database escola_nuvem;

create table alunos (
    id serial primary key,
    nome varchar(150) not null,
    idade int not null,
    nota_do_primeiro_semestre numeric,
    nota_do_segundo_semestre numeric,
    nome_do_professor varchar(150) references professores (nome),
    numero_da_sala int
  )

create table professores (
    id serial primary key,
    nome varchar(150) not null,
    disciplina varchar(100) not null
    )
    
   
alter table professores add constraint nome_unico unique (nome);