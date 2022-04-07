

USE bank;

CREATE TABLE customer(
    customer_id VARCHAR(20),
    f_name VARCHAR(20),
    m_name VARCHAR(20),
    l_name VARCHAR(20),
    addr VARCHAR(100),
    gender VARCHAR(1),
    dob DATE,
    m_no VARCHAR(10),
    PRIMARY KEY (customer_id)
);

CREATE TABLE account(
    account_no varchar(10),
    acc_type varchar(10),
    balance int,
    open_date date,
    customer_id varchar(20),
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    PRIMARY KEY (account_no)
);

CREATE TABLE transaction(
    transaction_id varchar(10),
    transaction_date date,
    amount int,
    account_no varchar(10),
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (account_no) REFERENCES account(account_no)
);

CREATE TABLE admin(
    user_name varchar(20),
    password varchar(20),
    m_no varchar(10),
    f_name varchar(20),
    m_name varchar(20),
    l_name varchar(20),
    address varchar(100),
    PRIMARY KEY (user_name)
);
