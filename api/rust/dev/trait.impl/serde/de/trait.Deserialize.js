(function() {
    var implementors = Object.fromEntries([["polars_core",[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.AnyValue.html\" title=\"enum polars_core::datatypes::AnyValue\">AnyValue</a>&lt;'static&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/chunked_array/ops/search_sorted/enum.SearchSortedSide.html\" title=\"enum polars_core::chunked_array::ops::search_sorted::SearchSortedSide\">SearchSortedSide</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.CategoricalOrdering.html\" title=\"enum polars_core::datatypes::CategoricalOrdering\">CategoricalOrdering</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.TimeUnit.html\" title=\"enum polars_core::datatypes::TimeUnit\">TimeUnit</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/datatypes/enum.UnknownKind.html\" title=\"enum polars_core::datatypes::UnknownKind\">UnknownKind</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/frame/enum.UniqueKeepStrategy.html\" title=\"enum polars_core::frame::UniqueKeepStrategy\">UniqueKeepStrategy</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/prelude/enum.IndexOrder.html\" title=\"enum polars_core::prelude::IndexOrder\">IndexOrder</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/series/enum.IsSorted.html\" title=\"enum polars_core::series::IsSorted\">IsSorted</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_core/series/ops/enum.NullBehavior.html\" title=\"enum polars_core::series::ops::NullBehavior\">NullBehavior</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/metadata/struct.MetadataFlags.html\" title=\"struct polars_core::chunked_array::metadata::MetadataFlags\">MetadataFlags</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/datatypes/struct.Field.html\" title=\"struct polars_core::datatypes::Field\">Field</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/datatypes/struct.ListType.html\" title=\"struct polars_core::datatypes::ListType\">ListType</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/frame/column/struct.ScalarColumn.html\" title=\"struct polars_core::frame::column::ScalarColumn\">ScalarColumn</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/frame/explode/struct.UnpivotArgsIR.html\" title=\"struct polars_core::frame::explode::UnpivotArgsIR\">UnpivotArgsIR</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/prelude/struct.RollingOptionsFixedWindow.html\" title=\"struct polars_core::prelude::RollingOptionsFixedWindow\">RollingOptionsFixedWindow</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/scalar/struct.Scalar.html\" title=\"struct polars_core::scalar::Scalar\">Scalar</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>"]]],["polars_io",[["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/cloud/credential_provider/enum.PlCredentialProvider.html\" title=\"enum polars_io::cloud::credential_provider::PlCredentialProvider\">PlCredentialProvider</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/csv/read/enum.CommentPrefix.html\" title=\"enum polars_io::csv::read::CommentPrefix\">CommentPrefix</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/csv/read/enum.CsvEncoding.html\" title=\"enum polars_io::csv::read::CsvEncoding\">CsvEncoding</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/csv/read/enum.NullValues.html\" title=\"enum polars_io::csv::read::NullValues\">NullValues</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/csv/write/enum.QuoteStyle.html\" title=\"enum polars_io::csv::write::QuoteStyle\">QuoteStyle</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/ipc/enum.IpcCompression.html\" title=\"enum polars_io::ipc::IpcCompression\">IpcCompression</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/parquet/read/enum.ParallelStrategy.html\" title=\"enum polars_io::parquet::read::ParallelStrategy\">ParallelStrategy</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"polars_io/parquet/write/enum.ParquetCompression.html\" title=\"enum polars_io::parquet::write::ParquetCompression\">ParquetCompression</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/cloud/options/struct.CloudOptions.html\" title=\"struct polars_io::cloud::options::CloudOptions\">CloudOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/csv/read/struct.CsvParseOptions.html\" title=\"struct polars_io::csv::read::CsvParseOptions\">CsvParseOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/csv/read/struct.CsvReadOptions.html\" title=\"struct polars_io::csv::read::CsvReadOptions\">CsvReadOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/csv/write/struct.CsvWriterOptions.html\" title=\"struct polars_io::csv::write::CsvWriterOptions\">CsvWriterOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/csv/write/struct.SerializeOptions.html\" title=\"struct polars_io::csv::write::SerializeOptions\">SerializeOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/ipc/struct.IpcScanOptions.html\" title=\"struct polars_io::ipc::IpcScanOptions\">IpcScanOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/ipc/struct.IpcWriterOptions.html\" title=\"struct polars_io::ipc::IpcWriterOptions\">IpcWriterOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/json/struct.JsonWriterOptions.html\" title=\"struct polars_io::json::JsonWriterOptions\">JsonWriterOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/parquet/read/struct.ParquetOptions.html\" title=\"struct polars_io::parquet::read::ParquetOptions\">ParquetOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/parquet/write/struct.BrotliLevel.html\" title=\"struct polars_io::parquet::write::BrotliLevel\">BrotliLevel</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/parquet/write/struct.GzipLevel.html\" title=\"struct polars_io::parquet::write::GzipLevel\">GzipLevel</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/parquet/write/struct.ParquetWriteOptions.html\" title=\"struct polars_io::parquet::write::ParquetWriteOptions\">ParquetWriteOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/parquet/write/struct.ZstdLevel.html\" title=\"struct polars_io::parquet::write::ZstdLevel\">ZstdLevel</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/predicates/struct.BatchStats.html\" title=\"struct polars_io::predicates::BatchStats\">BatchStats</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/predicates/struct.ColumnStats.html\" title=\"struct polars_io::predicates::ColumnStats\">ColumnStats</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/struct.HiveOptions.html\" title=\"struct polars_io::HiveOptions\">HiveOptions</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_io/struct.RowIndex.html\" title=\"struct polars_io::RowIndex\">RowIndex</a>"]]],["polars_utils",[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; for <a class=\"struct\" href=\"polars_utils/python_function/struct.PythonFunction.html\" title=\"struct polars_utils::python_function::PythonFunction\">PythonFunction</a>"],["impl&lt;'a, T: <a class=\"trait\" href=\"polars_utils/python_function/trait.TrySerializeToBytes.html\" title=\"trait polars_utils::python_function::TrySerializeToBytes\">TrySerializeToBytes</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; for <a class=\"struct\" href=\"polars_utils/python_function/struct.PySerializeWrap.html\" title=\"struct polars_utils::python_function::PySerializeWrap\">PySerializeWrap</a>&lt;T&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_utils/arena/struct.Node.html\" title=\"struct polars_utils::arena::Node\">Node</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_utils/pl_str/struct.PlSmallStr.html\" title=\"struct polars_utils::pl_str::PlSmallStr\">PlSmallStr</a>"],["impl&lt;'de, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polars_utils/arena/struct.Arena.html\" title=\"struct polars_utils::arena::Arena\">Arena</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[6502,8160,2027]}