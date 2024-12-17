(function() {
    var type_impls = Object.fromEntries([["polars_core",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#43-49\">Source</a><a href=\"#impl-Clone-for-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#44-48\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polars_core::chunked_array::logical::decimal::DecimalChunked"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#51-57\">Source</a><a href=\"#impl-Deref-for-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#52\">Source</a><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#54-56\">Source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","polars_core::chunked_array::logical::decimal::DecimalChunked"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#59-63\">Source</a><a href=\"#impl-DerefMut-for-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#60-62\">Source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","polars_core::chunked_array::logical::decimal::DecimalChunked"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#65-69\">Source</a><a href=\"#impl-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new_logical\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#66-68\">Source</a><h4 class=\"code-header\">pub fn <a href=\"polars_core/datatypes/struct.Logical.html#tymethod.new_logical\" class=\"fn\">new_logical</a>&lt;J: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt;(ca: <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;) -&gt; <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;J, T&gt;</h4></section></div></details>",0,"polars_core::chunked_array::logical::decimal::DecimalChunked"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#93-104\">Source</a><a href=\"#impl-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"polars_core/datatypes/trait.LogicalType.html\" title=\"trait polars_core::datatypes::LogicalType\">LogicalType</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.physical\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#97-99\">Source</a><h4 class=\"code-header\">pub fn <a href=\"polars_core/datatypes/struct.Logical.html#tymethod.physical\" class=\"fn\">physical</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;</h4></section><section id=\"method.field\" class=\"method\"><a class=\"src rightside\" href=\"src/polars_core/chunked_array/logical/mod.rs.html#100-103\">Source</a><h4 class=\"code-header\">pub fn <a href=\"polars_core/datatypes/struct.Logical.html#tymethod.field\" class=\"fn\">field</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polars_core/datatypes/struct.Field.html\" title=\"struct polars_core::datatypes::Field\">Field</a></h4></section></div></details>",0,"polars_core::chunked_array::logical::decimal::DecimalChunked"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Logical%3CK,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/serde/chunked_array.rs.html#89-110\">Source</a><a href=\"#impl-Serialize-for-Logical%3CK,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"polars_core/datatypes/trait.LogicalType.html\" title=\"trait polars_core::datatypes::LogicalType\">LogicalType</a>,\n    <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    T::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" title=\"type polars_core::datatypes::PolarsNumericType::Native\">Native</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3><span class=\"item-info\"><div class=\"stab portability\">Available on <strong>crate feature <code>serde</code></strong> only.</div></span></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/serde/chunked_array.rs.html#95-109\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","polars_core::chunked_array::logical::decimal::DecimalChunked"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14213]}