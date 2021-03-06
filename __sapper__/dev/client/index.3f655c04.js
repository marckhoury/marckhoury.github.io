import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as set_style, m as insert_dev, n as append_dev, o as noop } from './client.913bfe8f.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let figure;
	let img0;
	let img0_src_value;
	let t1;
	let p0;
	let t2;
	let b0;
	let t3;
	let t4;
	let t5;
	let p1;
	let t6;
	let a0;
	let t7;
	let t8;
	let a1;
	let t9;
	let t10;
	let t11;
	let h20;
	let t12;
	let t13;
	let h30;
	let a2;
	let img1;
	let img1_src_value;
	let t14;
	let t15;
	let p2;
	let b1;
	let t16;
	let t17;
	let br0;
	let t18;
	let h31;
	let a3;
	let img2;
	let img2_src_value;
	let t19;
	let t20;
	let p3;
	let b2;
	let t21;
	let t22;
	let br1;
	let t23;
	let a4;
	let t24;
	let t25;
	let t26;
	let h32;
	let a5;
	let img3;
	let img3_src_value;
	let t27;
	let t28;
	let p4;
	let b3;
	let t29;
	let t30;
	let br2;
	let t31;
	let t32;
	let h33;
	let a6;
	let img4;
	let img4_src_value;
	let t33;
	let t34;
	let p5;
	let b4;
	let t35;
	let t36;
	let br3;
	let t37;
	let a7;
	let t38;
	let t39;
	let t40;
	let h34;
	let a8;
	let img5;
	let img5_src_value;
	let t41;
	let t42;
	let p6;
	let b5;
	let t43;
	let t44;
	let br4;
	let t45;
	let t46;
	let h35;
	let a9;
	let img6;
	let img6_src_value;
	let t47;
	let t48;
	let p7;
	let b6;
	let t49;
	let t50;
	let br5;
	let t51;
	let t52;
	let h21;
	let t53;
	let t54;
	let h36;
	let a10;
	let img7;
	let img7_src_value;
	let t55;
	let t56;
	let p8;
	let b7;
	let t57;
	let t58;
	let br6;
	let t59;
	let h37;
	let a11;
	let img8;
	let img8_src_value;
	let t60;
	let t61;
	let p9;
	let b8;
	let t62;
	let t63;
	let br7;
	let t64;
	let h38;
	let a12;
	let img9;
	let img9_src_value;
	let t65;
	let t66;
	let p10;
	let b9;
	let t67;
	let t68;
	let br8;
	let t69;

	const block = {
		c: function create() {
			t0 = space();
			figure = element("figure");
			img0 = element("img");
			t1 = space();
			p0 = element("p");
			t2 = text("My name is ");
			b0 = element("b");
			t3 = text("Marc Khoury");
			t4 = text(". I'm an Algorithm Developer at Hudson River Trading. I received a PhD in Computer Science from UC Berkeley, a Masters in Mathematics from the University of Cambridge, and a Bachelors in Computer Science and Engineering from The Ohio State University. Over the course of my academic career, my research contributions spanned computational geometry, machine learning, optimization, geometric computer vision, and visualization. I received an NSF Graduate Research Fellowship, a Churchill Scholarship, and was a Finalist for the Hertz Fellowship.");
			t5 = space();
			p1 = element("p");
			t6 = text("My CV is available ");
			a0 = element("a");
			t7 = text("here");
			t8 = text(". The easiest way to contact me is by ");
			a1 = element("a");
			t9 = text("email");
			t10 = text(".");
			t11 = space();
			h20 = element("h2");
			t12 = text("Work History");
			t13 = space();
			h30 = element("h3");
			a2 = element("a");
			img1 = element("img");
			t14 = text("\n    Hudson River Trading");
			t15 = space();
			p2 = element("p");
			b1 = element("b");
			t16 = text("Algorithm Developer");
			t17 = text(" (August '20 —)");
			br0 = element("br");
			t18 = space();
			h31 = element("h3");
			a3 = element("a");
			img2 = element("img");
			t19 = text("\n    Intel");
			t20 = space();
			p3 = element("p");
			b2 = element("b");
			t21 = text("Research Intern");
			t22 = text(" (May '16 — June '17)");
			br1 = element("br");
			t23 = text("\n    Member of ");
			a4 = element("a");
			t24 = text("Intel Intelligent Systems Lab");
			t25 = text(". Developed a new approach for constructing local geometric feature descriptors for point\ncloud correspondences using deep learning.");
			t26 = space();
			h32 = element("h3");
			a5 = element("a");
			img3 = element("img");
			t27 = text("\n    Twitter");
			t28 = space();
			p4 = element("p");
			b3 = element("b");
			t29 = text("Software Engineering Intern");
			t30 = text(" (May '14 — Aug '14)");
			br2 = element("br");
			t31 = text("\n    Developed applications that enable mobile developers to support advertisements.");
			t32 = space();
			h33 = element("h3");
			a6 = element("a");
			img4 = element("img");
			t33 = text("\n    Microsoft Research");
			t34 = space();
			p5 = element("p");
			b4 = element("b");
			t35 = text("Research Intern");
			t36 = text(" (June '12 — Aug '13)");
			br3 = element("br");
			t37 = text("\n    Member of ");
			a7 = element("a");
			t38 = text("RiSE");
			t39 = text(". Developed a progressive graph data structure that dynamically reﬁnes and coarsens a graph around a focus region for interactive visualization of large graphs.");
			t40 = space();
			h34 = element("h3");
			a8 = element("a");
			img5 = element("img");
			t41 = text("\n    Amazon");
			t42 = space();
			p6 = element("p");
			b5 = element("b");
			t43 = text("Software Engineering Intern");
			t44 = text(" (Sept '11 — Dec '11)");
			br4 = element("br");
			t45 = text("\n    Developed a framework to collect, store, and analyze data from fraud cases to further automate Amazon’s fraud investigations.");
			t46 = space();
			h35 = element("h3");
			a9 = element("a");
			img6 = element("img");
			t47 = text("\n    AT&T Labs Research");
			t48 = space();
			p7 = element("p");
			b6 = element("b");
			t49 = text("Research Intern");
			t50 = text(" (June '11 — Aug '11)");
			br5 = element("br");
			t51 = text("\n    Developed a scalable stress majorization technique using approximate linear algebra to generate large graph drawings.");
			t52 = space();
			h21 = element("h2");
			t53 = text("Education");
			t54 = space();
			h36 = element("h3");
			a10 = element("a");
			img7 = element("img");
			t55 = text("\n    University of California, Berkeley");
			t56 = space();
			p8 = element("p");
			b7 = element("b");
			t57 = text("Ph.D., Computer Science");
			t58 = text(" (Aug '13 — May '20)");
			br6 = element("br");
			t59 = space();
			h37 = element("h3");
			a11 = element("a");
			img8 = element("img");
			t60 = text("\n    University of Cambridge");
			t61 = space();
			p9 = element("p");
			b8 = element("b");
			t62 = text("MASt, Mathematics");
			t63 = text(" (Aug '12 — May '13)");
			br7 = element("br");
			t64 = space();
			h38 = element("h3");
			a12 = element("a");
			img9 = element("img");
			t65 = text("\n    The Ohio State University");
			t66 = space();
			p10 = element("p");
			b9 = element("b");
			t67 = text("BS, Computer Science and Engineering");
			t68 = text(" (Sept '08 — June '12)");
			br8 = element("br");
			t69 = text("\n    Summa cum laude with Honors Research Distinction");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1gcn5ij\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img0 = claim_element(figure_nodes, "IMG", { alt: true, src: true, width: true });
			figure_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "My name is ");
			b0 = claim_element(p0_nodes, "B", {});
			var b0_nodes = children(b0);
			t3 = claim_text(b0_nodes, "Marc Khoury");
			b0_nodes.forEach(detach_dev);
			t4 = claim_text(p0_nodes, ". I'm an Algorithm Developer at Hudson River Trading. I received a PhD in Computer Science from UC Berkeley, a Masters in Mathematics from the University of Cambridge, and a Bachelors in Computer Science and Engineering from The Ohio State University. Over the course of my academic career, my research contributions spanned computational geometry, machine learning, optimization, geometric computer vision, and visualization. I received an NSF Graduate Research Fellowship, a Churchill Scholarship, and was a Finalist for the Hertz Fellowship.");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "My CV is available ");
			a0 = claim_element(p1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t7 = claim_text(a0_nodes, "here");
			a0_nodes.forEach(detach_dev);
			t8 = claim_text(p1_nodes, ". The easiest way to contact me is by ");
			a1 = claim_element(p1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "email");
			a1_nodes.forEach(detach_dev);
			t10 = claim_text(p1_nodes, ".");
			p1_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t12 = claim_text(h20_nodes, "Work History");
			h20_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			a2 = claim_element(h30_nodes, "A", { href: true, target: true });
			var a2_nodes = children(a2);
			img1 = claim_element(a2_nodes, "IMG", { alt: true, src: true, style: true });
			a2_nodes.forEach(detach_dev);
			t14 = claim_text(h30_nodes, "\n    Hudson River Trading");
			h30_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			p2 = claim_element(nodes, "P", { class: true });
			var p2_nodes = children(p2);
			b1 = claim_element(p2_nodes, "B", {});
			var b1_nodes = children(b1);
			t16 = claim_text(b1_nodes, "Algorithm Developer");
			b1_nodes.forEach(detach_dev);
			t17 = claim_text(p2_nodes, " (August '20 —)");
			br0 = claim_element(p2_nodes, "BR", {});
			p2_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			a3 = claim_element(h31_nodes, "A", { href: true, target: true });
			var a3_nodes = children(a3);
			img2 = claim_element(a3_nodes, "IMG", { alt: true, src: true, style: true });
			a3_nodes.forEach(detach_dev);
			t19 = claim_text(h31_nodes, "\n    Intel");
			h31_nodes.forEach(detach_dev);
			t20 = claim_space(nodes);
			p3 = claim_element(nodes, "P", { class: true });
			var p3_nodes = children(p3);
			b2 = claim_element(p3_nodes, "B", {});
			var b2_nodes = children(b2);
			t21 = claim_text(b2_nodes, "Research Intern");
			b2_nodes.forEach(detach_dev);
			t22 = claim_text(p3_nodes, " (May '16 — June '17)");
			br1 = claim_element(p3_nodes, "BR", {});
			t23 = claim_text(p3_nodes, "\n    Member of ");
			a4 = claim_element(p3_nodes, "A", { href: true });
			var a4_nodes = children(a4);
			t24 = claim_text(a4_nodes, "Intel Intelligent Systems Lab");
			a4_nodes.forEach(detach_dev);
			t25 = claim_text(p3_nodes, ". Developed a new approach for constructing local geometric feature descriptors for point\ncloud correspondences using deep learning.");
			p3_nodes.forEach(detach_dev);
			t26 = claim_space(nodes);
			h32 = claim_element(nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			a5 = claim_element(h32_nodes, "A", { href: true, target: true });
			var a5_nodes = children(a5);
			img3 = claim_element(a5_nodes, "IMG", { alt: true, src: true, style: true });
			a5_nodes.forEach(detach_dev);
			t27 = claim_text(h32_nodes, "\n    Twitter");
			h32_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			p4 = claim_element(nodes, "P", { class: true });
			var p4_nodes = children(p4);
			b3 = claim_element(p4_nodes, "B", {});
			var b3_nodes = children(b3);
			t29 = claim_text(b3_nodes, "Software Engineering Intern");
			b3_nodes.forEach(detach_dev);
			t30 = claim_text(p4_nodes, " (May '14 — Aug '14)");
			br2 = claim_element(p4_nodes, "BR", {});
			t31 = claim_text(p4_nodes, "\n    Developed applications that enable mobile developers to support advertisements.");
			p4_nodes.forEach(detach_dev);
			t32 = claim_space(nodes);
			h33 = claim_element(nodes, "H3", { class: true });
			var h33_nodes = children(h33);
			a6 = claim_element(h33_nodes, "A", { href: true, target: true });
			var a6_nodes = children(a6);
			img4 = claim_element(a6_nodes, "IMG", { alt: true, src: true, style: true });
			a6_nodes.forEach(detach_dev);
			t33 = claim_text(h33_nodes, "\n    Microsoft Research");
			h33_nodes.forEach(detach_dev);
			t34 = claim_space(nodes);
			p5 = claim_element(nodes, "P", { class: true });
			var p5_nodes = children(p5);
			b4 = claim_element(p5_nodes, "B", {});
			var b4_nodes = children(b4);
			t35 = claim_text(b4_nodes, "Research Intern");
			b4_nodes.forEach(detach_dev);
			t36 = claim_text(p5_nodes, " (June '12 — Aug '13)");
			br3 = claim_element(p5_nodes, "BR", {});
			t37 = claim_text(p5_nodes, "\n    Member of ");
			a7 = claim_element(p5_nodes, "A", { href: true });
			var a7_nodes = children(a7);
			t38 = claim_text(a7_nodes, "RiSE");
			a7_nodes.forEach(detach_dev);
			t39 = claim_text(p5_nodes, ". Developed a progressive graph data structure that dynamically reﬁnes and coarsens a graph around a focus region for interactive visualization of large graphs.");
			p5_nodes.forEach(detach_dev);
			t40 = claim_space(nodes);
			h34 = claim_element(nodes, "H3", { class: true });
			var h34_nodes = children(h34);
			a8 = claim_element(h34_nodes, "A", { href: true, target: true });
			var a8_nodes = children(a8);
			img5 = claim_element(a8_nodes, "IMG", { alt: true, src: true, style: true });
			a8_nodes.forEach(detach_dev);
			t41 = claim_text(h34_nodes, "\n    Amazon");
			h34_nodes.forEach(detach_dev);
			t42 = claim_space(nodes);
			p6 = claim_element(nodes, "P", { class: true });
			var p6_nodes = children(p6);
			b5 = claim_element(p6_nodes, "B", {});
			var b5_nodes = children(b5);
			t43 = claim_text(b5_nodes, "Software Engineering Intern");
			b5_nodes.forEach(detach_dev);
			t44 = claim_text(p6_nodes, " (Sept '11 — Dec '11)");
			br4 = claim_element(p6_nodes, "BR", {});
			t45 = claim_text(p6_nodes, "\n    Developed a framework to collect, store, and analyze data from fraud cases to further automate Amazon’s fraud investigations.");
			p6_nodes.forEach(detach_dev);
			t46 = claim_space(nodes);
			h35 = claim_element(nodes, "H3", { class: true });
			var h35_nodes = children(h35);
			a9 = claim_element(h35_nodes, "A", { href: true, target: true });
			var a9_nodes = children(a9);
			img6 = claim_element(a9_nodes, "IMG", { alt: true, src: true, style: true });
			a9_nodes.forEach(detach_dev);
			t47 = claim_text(h35_nodes, "\n    AT&T Labs Research");
			h35_nodes.forEach(detach_dev);
			t48 = claim_space(nodes);
			p7 = claim_element(nodes, "P", { class: true });
			var p7_nodes = children(p7);
			b6 = claim_element(p7_nodes, "B", {});
			var b6_nodes = children(b6);
			t49 = claim_text(b6_nodes, "Research Intern");
			b6_nodes.forEach(detach_dev);
			t50 = claim_text(p7_nodes, " (June '11 — Aug '11)");
			br5 = claim_element(p7_nodes, "BR", {});
			t51 = claim_text(p7_nodes, "\n    Developed a scalable stress majorization technique using approximate linear algebra to generate large graph drawings.");
			p7_nodes.forEach(detach_dev);
			t52 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t53 = claim_text(h21_nodes, "Education");
			h21_nodes.forEach(detach_dev);
			t54 = claim_space(nodes);
			h36 = claim_element(nodes, "H3", { class: true });
			var h36_nodes = children(h36);
			a10 = claim_element(h36_nodes, "A", { href: true, target: true });
			var a10_nodes = children(a10);
			img7 = claim_element(a10_nodes, "IMG", { alt: true, src: true, style: true });
			a10_nodes.forEach(detach_dev);
			t55 = claim_text(h36_nodes, "\n    University of California, Berkeley");
			h36_nodes.forEach(detach_dev);
			t56 = claim_space(nodes);
			p8 = claim_element(nodes, "P", { class: true });
			var p8_nodes = children(p8);
			b7 = claim_element(p8_nodes, "B", {});
			var b7_nodes = children(b7);
			t57 = claim_text(b7_nodes, "Ph.D., Computer Science");
			b7_nodes.forEach(detach_dev);
			t58 = claim_text(p8_nodes, " (Aug '13 — May '20)");
			br6 = claim_element(p8_nodes, "BR", {});
			p8_nodes.forEach(detach_dev);
			t59 = claim_space(nodes);
			h37 = claim_element(nodes, "H3", { class: true });
			var h37_nodes = children(h37);
			a11 = claim_element(h37_nodes, "A", { href: true, target: true });
			var a11_nodes = children(a11);
			img8 = claim_element(a11_nodes, "IMG", { alt: true, src: true, style: true });
			a11_nodes.forEach(detach_dev);
			t60 = claim_text(h37_nodes, "\n    University of Cambridge");
			h37_nodes.forEach(detach_dev);
			t61 = claim_space(nodes);
			p9 = claim_element(nodes, "P", { class: true });
			var p9_nodes = children(p9);
			b8 = claim_element(p9_nodes, "B", {});
			var b8_nodes = children(b8);
			t62 = claim_text(b8_nodes, "MASt, Mathematics");
			b8_nodes.forEach(detach_dev);
			t63 = claim_text(p9_nodes, " (Aug '12 — May '13)");
			br7 = claim_element(p9_nodes, "BR", {});
			p9_nodes.forEach(detach_dev);
			t64 = claim_space(nodes);
			h38 = claim_element(nodes, "H3", { class: true });
			var h38_nodes = children(h38);
			a12 = claim_element(h38_nodes, "A", { href: true, target: true });
			var a12_nodes = children(a12);
			img9 = claim_element(a12_nodes, "IMG", { alt: true, src: true, style: true });
			a12_nodes.forEach(detach_dev);
			t65 = claim_text(h38_nodes, "\n    The Ohio State University");
			h38_nodes.forEach(detach_dev);
			t66 = claim_space(nodes);
			p10 = claim_element(nodes, "P", { class: true });
			var p10_nodes = children(p10);
			b9 = claim_element(p10_nodes, "B", {});
			var b9_nodes = children(b9);
			t67 = claim_text(b9_nodes, "BS, Computer Science and Engineering");
			b9_nodes.forEach(detach_dev);
			t68 = claim_text(p10_nodes, " (Sept '08 — June '12)");
			br8 = claim_element(p10_nodes, "BR", {});
			t69 = claim_text(p10_nodes, "\n    Summa cum laude with Honors Research Distinction");
			p10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Marc Khoury";
			attr_dev(img0, "alt", "me");
			if (img0.src !== (img0_src_value = "metrinity.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "width", "300");
			add_location(img0, file, 32, 1, 370);
			attr_dev(figure, "class", "svelte-p12hia");
			add_location(figure, file, 31, 0, 360);
			add_location(b0, file, 35, 11, 442);
			attr_dev(p0, "class", "svelte-p12hia");
			add_location(p0, file, 34, 0, 427);
			attr_dev(a0, "href", "cv.pdf");
			add_location(a0, file, 39, 19, 1035);
			attr_dev(a1, "href", "mailto:marc.khry@gmail.com");
			add_location(a1, file, 39, 82, 1098);
			attr_dev(p1, "class", "svelte-p12hia");
			add_location(p1, file, 38, 0, 1012);
			attr_dev(h20, "class", "svelte-p12hia");
			add_location(h20, file, 42, 0, 1154);
			attr_dev(img1, "alt", "hrt");
			if (img1.src !== (img1_src_value = "hrt.svg")) attr_dev(img1, "src", img1_src_value);
			set_style(img1, "width", "2em");
			set_style(img1, "padding-right", "0.5em");
			add_location(img1, file, 46, 8, 1259);
			attr_dev(a2, "href", "http://www.hudson-trading.com/about/");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file, 45, 4, 1187);
			attr_dev(h30, "class", "svelte-p12hia");
			add_location(h30, file, 44, 0, 1178);
			add_location(b1, file, 51, 4, 1378);
			add_location(br0, file, 51, 56, 1430);
			attr_dev(p2, "class", "svelte-p12hia");
			add_location(p2, file, 50, 0, 1370);
			attr_dev(img2, "alt", "intel");
			if (img2.src !== (img2_src_value = "intel.svg")) attr_dev(img2, "src", img2_src_value);
			set_style(img2, "width", "2em");
			set_style(img2, "padding-right", "0.5em");
			add_location(img2, file, 56, 8, 1539);
			attr_dev(a3, "href", "https://www.intel.com/content/www/us/en/homepage.html");
			attr_dev(a3, "target", "_blank");
			add_location(a3, file, 55, 4, 1450);
			attr_dev(h31, "class", "svelte-p12hia");
			add_location(h31, file, 54, 0, 1441);
			add_location(b2, file, 61, 4, 1648);
			add_location(br1, file, 61, 63, 1707);
			attr_dev(a4, "href", "http://vladlen.info/");
			add_location(a4, file, 62, 14, 1726);
			attr_dev(p3, "class", "svelte-p12hia");
			add_location(p3, file, 60, 0, 1640);
			attr_dev(img3, "alt", "twitter");
			if (img3.src !== (img3_src_value = "twitter.png")) attr_dev(img3, "src", img3_src_value);
			set_style(img3, "width", "2em");
			set_style(img3, "padding-right", "0.5em");
			add_location(img3, file, 68, 8, 1997);
			attr_dev(a5, "href", "https://www.twitter.com");
			attr_dev(a5, "target", "_blank");
			add_location(a5, file, 67, 4, 1938);
			attr_dev(h32, "class", "svelte-p12hia");
			add_location(h32, file, 66, 0, 1929);
			add_location(b3, file, 73, 4, 2111);
			add_location(br2, file, 73, 74, 2181);
			attr_dev(p4, "class", "svelte-p12hia");
			add_location(p4, file, 72, 0, 2103);
			attr_dev(img4, "alt", "microsoft");
			if (img4.src !== (img4_src_value = "microsoft.svg")) attr_dev(img4, "src", img4_src_value);
			set_style(img4, "width", "2em");
			set_style(img4, "padding-right", "0.5em");
			add_location(img4, file, 79, 8, 2362);
			attr_dev(a6, "href", "https://www.microsoft.com/en-us/research/");
			attr_dev(a6, "target", "_blank");
			add_location(a6, file, 78, 4, 2285);
			attr_dev(h33, "class", "svelte-p12hia");
			add_location(h33, file, 77, 0, 2276);
			add_location(b4, file, 84, 4, 2491);
			add_location(br3, file, 84, 63, 2550);
			attr_dev(a7, "href", "https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/");
			add_location(a7, file, 85, 14, 2569);
			attr_dev(p5, "class", "svelte-p12hia");
			add_location(p5, file, 83, 0, 2483);
			attr_dev(img5, "alt", "amazon");
			if (img5.src !== (img5_src_value = "amazon.png")) attr_dev(img5, "src", img5_src_value);
			set_style(img5, "width", "2em");
			set_style(img5, "padding-right", "0.5em");
			add_location(img5, file, 90, 8, 2904);
			attr_dev(a8, "href", "https://www.amazon.com");
			attr_dev(a8, "target", "_blank");
			add_location(a8, file, 89, 4, 2846);
			attr_dev(h34, "class", "svelte-p12hia");
			add_location(h34, file, 88, 0, 2837);
			add_location(b5, file, 95, 4, 3016);
			add_location(br4, file, 95, 75, 3087);
			attr_dev(p6, "class", "svelte-p12hia");
			add_location(p6, file, 94, 0, 3008);
			attr_dev(img6, "alt", "att");
			if (img6.src !== (img6_src_value = "att.svg")) attr_dev(img6, "src", img6_src_value);
			set_style(img6, "width", "2em");
			set_style(img6, "padding-right", "0.5em");
			add_location(img6, file, 101, 8, 3302);
			attr_dev(a9, "href", "https://www.research.att.com/");
			attr_dev(a9, "target", "_blank");
			add_location(a9, file, 100, 4, 3237);
			attr_dev(h35, "class", "svelte-p12hia");
			add_location(h35, file, 99, 0, 3228);
			add_location(b6, file, 106, 4, 3419);
			add_location(br5, file, 106, 63, 3478);
			attr_dev(p7, "class", "svelte-p12hia");
			add_location(p7, file, 105, 0, 3411);
			attr_dev(h21, "class", "svelte-p12hia");
			add_location(h21, file, 111, 0, 3612);
			attr_dev(img7, "alt", "cal");
			if (img7.src !== (img7_src_value = "cal.svg")) attr_dev(img7, "src", img7_src_value);
			set_style(img7, "width", "2em");
			set_style(img7, "padding-right", "0.5em");
			add_location(img7, file, 114, 8, 3703);
			attr_dev(a10, "href", "https://www.berkeley.edu/");
			attr_dev(a10, "target", "_blank");
			add_location(a10, file, 113, 4, 3642);
			attr_dev(h36, "class", "svelte-p12hia");
			add_location(h36, file, 112, 0, 3633);
			add_location(b7, file, 119, 4, 3836);
			add_location(br6, file, 119, 70, 3902);
			attr_dev(p8, "class", "svelte-p12hia");
			add_location(p8, file, 118, 0, 3828);
			attr_dev(img8, "alt", "cambridge");
			if (img8.src !== (img8_src_value = "cambridge.svg")) attr_dev(img8, "src", img8_src_value);
			set_style(img8, "width", "2em");
			set_style(img8, "padding-right", "0.5em");
			add_location(img8, file, 124, 8, 3980);
			attr_dev(a11, "href", "https://www.cam.ac.uk/");
			attr_dev(a11, "target", "_blank");
			add_location(a11, file, 123, 4, 3922);
			attr_dev(h37, "class", "svelte-p12hia");
			add_location(h37, file, 122, 0, 3913);
			add_location(b8, file, 129, 4, 4114);
			add_location(br7, file, 129, 64, 4174);
			attr_dev(p9, "class", "svelte-p12hia");
			add_location(p9, file, 128, 0, 4106);
			attr_dev(img9, "alt", "osu");
			if (img9.src !== (img9_src_value = "osu.svg")) attr_dev(img9, "src", img9_src_value);
			set_style(img9, "width", "2em");
			set_style(img9, "padding-right", "0.5em");
			add_location(img9, file, 134, 8, 4250);
			attr_dev(a12, "href", "https://www.osu.edu/");
			attr_dev(a12, "target", "_blank");
			add_location(a12, file, 133, 4, 4194);
			attr_dev(h38, "class", "svelte-p12hia");
			add_location(h38, file, 132, 0, 4185);
			add_location(b9, file, 139, 4, 4374);
			add_location(br8, file, 139, 86, 4456);
			attr_dev(p10, "class", "svelte-p12hia");
			add_location(p10, file, 138, 0, 4366);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			append_dev(p0, b0);
			append_dev(b0, t3);
			append_dev(p0, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t6);
			append_dev(p1, a0);
			append_dev(a0, t7);
			append_dev(p1, t8);
			append_dev(p1, a1);
			append_dev(a1, t9);
			append_dev(p1, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, a2);
			append_dev(a2, img1);
			append_dev(h30, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, b1);
			append_dev(b1, t16);
			append_dev(p2, t17);
			append_dev(p2, br0);
			insert_dev(target, t18, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, a3);
			append_dev(a3, img2);
			append_dev(h31, t19);
			insert_dev(target, t20, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, b2);
			append_dev(b2, t21);
			append_dev(p3, t22);
			append_dev(p3, br1);
			append_dev(p3, t23);
			append_dev(p3, a4);
			append_dev(a4, t24);
			append_dev(p3, t25);
			insert_dev(target, t26, anchor);
			insert_dev(target, h32, anchor);
			append_dev(h32, a5);
			append_dev(a5, img3);
			append_dev(h32, t27);
			insert_dev(target, t28, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, b3);
			append_dev(b3, t29);
			append_dev(p4, t30);
			append_dev(p4, br2);
			append_dev(p4, t31);
			insert_dev(target, t32, anchor);
			insert_dev(target, h33, anchor);
			append_dev(h33, a6);
			append_dev(a6, img4);
			append_dev(h33, t33);
			insert_dev(target, t34, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, b4);
			append_dev(b4, t35);
			append_dev(p5, t36);
			append_dev(p5, br3);
			append_dev(p5, t37);
			append_dev(p5, a7);
			append_dev(a7, t38);
			append_dev(p5, t39);
			insert_dev(target, t40, anchor);
			insert_dev(target, h34, anchor);
			append_dev(h34, a8);
			append_dev(a8, img5);
			append_dev(h34, t41);
			insert_dev(target, t42, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, b5);
			append_dev(b5, t43);
			append_dev(p6, t44);
			append_dev(p6, br4);
			append_dev(p6, t45);
			insert_dev(target, t46, anchor);
			insert_dev(target, h35, anchor);
			append_dev(h35, a9);
			append_dev(a9, img6);
			append_dev(h35, t47);
			insert_dev(target, t48, anchor);
			insert_dev(target, p7, anchor);
			append_dev(p7, b6);
			append_dev(b6, t49);
			append_dev(p7, t50);
			append_dev(p7, br5);
			append_dev(p7, t51);
			insert_dev(target, t52, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t53);
			insert_dev(target, t54, anchor);
			insert_dev(target, h36, anchor);
			append_dev(h36, a10);
			append_dev(a10, img7);
			append_dev(h36, t55);
			insert_dev(target, t56, anchor);
			insert_dev(target, p8, anchor);
			append_dev(p8, b7);
			append_dev(b7, t57);
			append_dev(p8, t58);
			append_dev(p8, br6);
			insert_dev(target, t59, anchor);
			insert_dev(target, h37, anchor);
			append_dev(h37, a11);
			append_dev(a11, img8);
			append_dev(h37, t60);
			insert_dev(target, t61, anchor);
			insert_dev(target, p9, anchor);
			append_dev(p9, b8);
			append_dev(b8, t62);
			append_dev(p9, t63);
			append_dev(p9, br7);
			insert_dev(target, t64, anchor);
			insert_dev(target, h38, anchor);
			append_dev(h38, a12);
			append_dev(a12, img9);
			append_dev(h38, t65);
			insert_dev(target, t66, anchor);
			insert_dev(target, p10, anchor);
			append_dev(p10, b9);
			append_dev(b9, t67);
			append_dev(p10, t68);
			append_dev(p10, br8);
			append_dev(p10, t69);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t26);
			if (detaching) detach_dev(h32);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t32);
			if (detaching) detach_dev(h33);
			if (detaching) detach_dev(t34);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t40);
			if (detaching) detach_dev(h34);
			if (detaching) detach_dev(t42);
			if (detaching) detach_dev(p6);
			if (detaching) detach_dev(t46);
			if (detaching) detach_dev(h35);
			if (detaching) detach_dev(t48);
			if (detaching) detach_dev(p7);
			if (detaching) detach_dev(t52);
			if (detaching) detach_dev(h21);
			if (detaching) detach_dev(t54);
			if (detaching) detach_dev(h36);
			if (detaching) detach_dev(t56);
			if (detaching) detach_dev(p8);
			if (detaching) detach_dev(t59);
			if (detaching) detach_dev(h37);
			if (detaching) detach_dev(t61);
			if (detaching) detach_dev(p9);
			if (detaching) detach_dev(t64);
			if (detaching) detach_dev(h38);
			if (detaching) detach_dev(t66);
			if (detaching) detach_dev(p10);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2Y2NTVjMDQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
