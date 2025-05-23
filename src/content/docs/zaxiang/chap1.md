---
title: Chap1 计算机系统概述
description: 计算机系统概述
---


## 计算机系统

### 软件

- 系统软件

- 应用软件

### 硬件

- 1.电子数字计算机：ENIAC，电子管

- 2.晶体管

- 3.中小规模集成电路

- 4.大规模、超大规模集成电路

### 微型计算机的发展标志

- 微处理器技术

  其实也就是CPU
  
## 计算机硬件的基本组成

### 早期冯诺依曼机

- 五大部件

	- 输入输出设备

	- 存储器

		- 主存（内存）

			- MAR、MDR、CPU可直接访问

			- 基本组成

				- MAR

					- MAR位数反映存储单元的个数

					- M(MAR)→MDR

				- MDR

					- MDR位数=存储字长

				- 存储体

					- 存储元

						- 存储二进制的电子元件，每个存储元可存1bit

					- 存储字(word)长

					- 存储单元

						- 每个地址对应一个存储单元

						  块block？
						  
		- 辅存（外存）：CPU不能直接访问

	- 运算器

		- ALU、ACC、MQ、PSW

	- 控制器

		- CU：分析指令，给出信号

		- IR：存放指令

		- PC

			- 存放下一条指令地址

			- (PC)→MAR

			  将PC中的地址放入MAR中取值
			  
- 指令和数据以同等地位存于存储
器，可按地址寻访

	- 根据指令执行的不同周期来判断是指令还是数据

- “存储程序”概念

	- 将程序和数据送入主存，启动后自动逐条执行指令

- 以运算器为中心

### 现代计算机

- 以存储器为中心

## 计算机多级层次结构

### 三语言

- 高级语言

- 汇编语言

- 机器语言

	- 二进制，计算机唯一可以直接识别和执行的语言

- 解释器：将源程序一条条翻译成机器指令并立即执行（Python

### C语言源程序到可执行文件

- 预处理（C-PreProcessor）：将#后.h文件插入程序，输出拓展文件~.i

- 编译器（C-CompiLer）：将预处理后的程序生成汇编语言~.s

- 汇编器（ASsembler）：将汇编语言生成机器语言可重定位目标文件~.o

- 链接器（LoaDer）：将多个~.o文件与标准库函数合并成可执行文件~

## 性能指标

### 字长

- 三大字长

	- 机器字长

		- 计算机一次整数运算所能处理的二进制位数

	- 存储字长

		- 每个存储单元能存放的二进制数据位数

	- 指令字长

		- 指令长度是存储字长的多少倍

			- 影响指令需要的访存次数

		- 指令长度是机器字长的多少倍

			- 半字长指令、单字长指令、双字长指令

- 部件字长

	- ALU、通用寄存器

		- 机器字长

	- PC、MAR

		- 存放地址，由存储单元的个数决定

	- MDR

		- 存储字长

	- 按字节/字/Xbit编址

		- 存储字长

	- 总线位数

### 主存容量

- 字数（2^MAR） x 字长（MDR）

### 运算速度

描述容量用2，描述速率用10

- 时钟周期与主频互为倒数

- CPI（Clock Per Instruction）

- MIPS（Million Instructions Per Second）

- MFLOPS、G、T、P、E、Z

  PEZ皮礼士糖果
  
